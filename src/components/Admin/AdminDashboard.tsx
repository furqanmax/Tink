import { useState, useEffect } from 'react';
import { collection, query, getDocs, doc, updateDoc, deleteDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { firestore } from '@/config/firebase';
import { useAuthStore } from '@/store/authStore';
import { User, AdminSettings } from '@/types';
import { Shield, Users, Settings, Ban, CheckCircle, AlertTriangle } from 'lucide-react';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminDashboard({ isOpen, onClose }: AdminDashboardProps) {
  const { userProfile } = useAuthStore();
  const [activeTab, setActiveTab] = useState<'users' | 'settings' | 'blocked'>('users');
  const [users, setUsers] = useState<User[]>([]);
  const [blockedUsers, setBlockedUsers] = useState<string[]>([]);
  const [settings, setSettings] = useState<AdminSettings | null>(null);
  const [loading, setLoading] = useState(false);

  // Check if user is admin
  const isAdmin = userProfile?.role === 'admin';

  useEffect(() => {
    if (isOpen && isAdmin) {
      loadData();
    }
  }, [isOpen, isAdmin]);

  const loadData = async () => {
    setLoading(true);
    try {
      // Load users
      const usersQuery = query(collection(firestore, 'users'));
      const usersSnap = await getDocs(usersQuery);
      const usersData = usersSnap.docs.map(doc => ({ ...doc.data(), uid: doc.id } as User));
      setUsers(usersData);

      // Load settings
      const settingsDoc = await getDocs(collection(firestore, 'settings'));
      const settingsData = settingsDoc.docs.find(d => d.id === 'appSettings')?.data() as AdminSettings | undefined;
      setSettings(settingsData || {
        maxFileSize: 30 * 1024 * 1024,
        maxCallDuration: 3600,
        maxConcurrentCalls: 10,
        videoQuality: 'HIGH',
        audioCodec: 'opus',
        videoCodec: 'vp8',
        enableRecording: false,
        turnServers: [],
      });

      // Load blocked users
      setBlockedUsers(settingsData?.blockedUsers || []);
    } catch (error) {
      console.error('Failed to load admin data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBlockUser = async (userId: string) => {
    try {
      const newBlocked = [...blockedUsers, userId];
      await setDoc(doc(firestore, 'settings', 'appSettings'), {
        blockedUsers: newBlocked,
        updatedAt: serverTimestamp(),
      }, { merge: true });
      setBlockedUsers(newBlocked);
    } catch (error) {
      console.error('Failed to block user:', error);
    }
  };

  const handleUnblockUser = async (userId: string) => {
    try {
      const newBlocked = blockedUsers.filter(id => id !== userId);
      await setDoc(doc(firestore, 'settings', 'appSettings'), {
        blockedUsers: newBlocked,
        updatedAt: serverTimestamp(),
      }, { merge: true });
      setBlockedUsers(newBlocked);
    } catch (error) {
      console.error('Failed to unblock user:', error);
    }
  };

  const handleUpdateSettings = async (newSettings: Partial<AdminSettings>) => {
    try {
      await setDoc(doc(firestore, 'settings', 'appSettings'), {
        ...newSettings,
        updatedAt: serverTimestamp(),
      }, { merge: true });
      setSettings(prev => prev ? { ...prev, ...newSettings } : null);
    } catch (error) {
      console.error('Failed to update settings:', error);
    }
  };

  if (!isOpen) return null;

  if (!isAdmin) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm mx-4 text-center">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-500 mb-4">You don't have permission to access the admin dashboard.</p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-500">System Management</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab('users')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'users'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Users className="w-4 h-4" />
            Users ({users.length})
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'settings'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <button
            onClick={() => setActiveTab('blocked')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'blocked'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Ban className="w-4 h-4" />
            Blocked ({blockedUsers.length})
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 max-w-6xl mx-auto">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : activeTab === 'users' ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">User</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">Status</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">Joined</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.uid} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-medium">
                              {user.displayName?.[0]?.toUpperCase() || '?'}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{user.displayName || 'Unknown'}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === 'online'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            user.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                          }`} />
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                      </td>
                      <td className="px-6 py-4">
                        {blockedUsers.includes(user.uid) ? (
                          <button
                            onClick={() => handleUnblockUser(user.uid)}
                            className="flex items-center gap-1 text-sm text-green-600 hover:text-green-700"
                          >
                            <CheckCircle className="w-4 h-4" />
                            Unblock
                          </button>
                        ) : (
                          <button
                            onClick={() => handleBlockUser(user.uid)}
                            className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700"
                          >
                            <Ban className="w-4 h-4" />
                            Block
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : activeTab === 'settings' ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max File Size (MB)
                </label>
                <input
                  type="number"
                  value={(settings?.maxFileSize || 30 * 1024 * 1024) / 1024 / 1024}
                  onChange={(e) => handleUpdateSettings({ maxFileSize: parseInt(e.target.value) * 1024 * 1024 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Call Duration (minutes)
                </label>
                <input
                  type="number"
                  value={(settings?.maxCallDuration || 3600) / 60}
                  onChange={(e) => handleUpdateSettings({ maxCallDuration: parseInt(e.target.value) * 60 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Video Quality
                </label>
                <select
                  value={settings?.videoQuality || 'HIGH'}
                  onChange={(e) => handleUpdateSettings({ videoQuality: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="LOW">Low</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HIGH">High</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Concurrent Calls
                </label>
                <input
                  type="number"
                  value={settings?.maxConcurrentCalls || 10}
                  onChange={(e) => handleUpdateSettings({ maxConcurrentCalls: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            {blockedUsers.length === 0 ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <p className="text-gray-500">No users are currently blocked</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {users.filter(u => blockedUsers.includes(u.uid)).map((user) => (
                  <div key={user.uid} className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-medium">
                          {user.displayName?.[0]?.toUpperCase() || '?'}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{user.displayName || 'Unknown'}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleUnblockUser(user.uid)}
                      className="px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    >
                      Unblock
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
