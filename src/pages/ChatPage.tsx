import { useState, useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { useCallStore } from '@/store/callStore';
import { useFriendRequestStore } from '@/store/friendRequestStore';
import { Navbar } from '@/components/Common/Navbar';
import { UserSearch } from '@/components/Contacts/UserSearch';
import { ContactsList } from '@/components/Contacts/ContactsList';
import { ChatWindow } from '@/components/Chat/ChatWindow';
import { FriendRequestsPanel } from '@/components/Contacts/FriendRequestsPanel';
import { IncomingCallNotification } from '@/components/Call/IncomingCallNotification';
import { CallWindow } from '@/components/Call/CallWindow';
import { AdminDashboard } from '@/components/Admin/AdminDashboard';
import { notificationService } from '@/services/notification';
import { startPresence } from '@/services/presence';
import { UserPlus, Shield } from 'lucide-react';

export function ChatPage() {
  const { user, userProfile, logout } = useAuthStore();
  const { callState, initializeIncomingCallListener, cleanup: cleanupCalls } = useCallStore();
  const { incomingRequests, loadFriendRequests, cleanup } = useFriendRequestStore();
  
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'chats' | 'contacts'>('chats');
  const [showFriendRequests, setShowFriendRequests] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showCallWindow, setShowCallWindow] = useState(false);

  useEffect(() => {
    void notificationService.initialize();

    // Load friend requests
    if (user) {
      loadFriendRequests(user.uid);
    }
    return () => {
      cleanup();
    };
  }, [user, loadFriendRequests, cleanup]);

  useEffect(() => {
    if (!user) return;
    const stop = startPresence(user.uid);
    return () => {
      stop();
    };
  }, [user]);

  useEffect(() => {
    if (!user) return;
    initializeIncomingCallListener();
    return () => {
      cleanupCalls();
    };
  }, [user, initializeIncomingCallListener, cleanupCalls]);

  // Show call window when in call
  useEffect(() => {
    if (callState === 'connected' || callState === 'connecting' || callState === 'ringing') {
      setShowCallWindow(true);
    }
  }, [callState]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div
      className="bg-gray-100 dark:bg-gray-950 flex flex-col overflow-hidden"
      style={{ height: 'var(--app-height, 100dvh)' }}
    >
      {/* Incoming Call Notification */}
      <IncomingCallNotification isOpen={true} />

      {/* Call Window */}
      <CallWindow 
        isOpen={showCallWindow} 
        onClose={() => setShowCallWindow(false)} 
      />

      {/* Friend Requests Panel */}
      <FriendRequestsPanel 
        isOpen={showFriendRequests} 
        onClose={() => setShowFriendRequests(false)} 
      />

      {/* Admin Dashboard */}
      <AdminDashboard 
        isOpen={showAdminPanel} 
        onClose={() => setShowAdminPanel(false)} 
      />
      <div className={selectedContact ? 'hidden lg:block' : 'block'}>
        <Navbar 
          user={user} 
          userProfile={userProfile} 
          onLogout={handleLogout}
        >
          {/* Additional Navbar Actions */}
          <div className="flex items-center gap-2 mr-4">
            {/* Friend Requests Button */}
            <button
              onClick={() => setShowFriendRequests(true)}
              className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              title="Friend Requests"
            >
              <UserPlus className="w-5 h-5" />
              {incomingRequests.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {incomingRequests.length}
                </span>
              )}
            </button>

            {/* Admin Button (only for admins) */}
            {userProfile?.role === 'admin' && (
              <button
                onClick={() => setShowAdminPanel(true)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                title="Admin Dashboard"
              >
                <Shield className="w-5 h-5" />
              </button>
            )}
          </div>
        </Navbar>
      </div>

      <div className="flex-1 min-h-0">
        <div className="flex overflow-hidden h-full">
          {/* Sidebar */}
          <div
            className={`w-full lg:w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex-col min-w-0 ${
              selectedContact ? 'hidden lg:flex' : 'flex'
            }`}
          >
            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-800">
              <button
                onClick={() => setActiveTab('chats')}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'chats'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Chats
              </button>
              <button
                onClick={() => setActiveTab('contacts')}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'contacts'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Contacts
              </button>
            </div>

            {/* Search */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
              <UserSearch
                onSelectContact={setSelectedContact}
                onOpenRequests={() => setShowFriendRequests(true)}
              />
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {activeTab === 'chats' ? (
                <ContactsList 
                  onSelectContact={setSelectedContact}
                  selectedContact={selectedContact}
                />
              ) : (
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">
                    Your Contacts
                  </h3>
                  <ContactsList 
                    onSelectContact={setSelectedContact}
                    selectedContact={selectedContact}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Main Chat Area */}
          <div
            className={`flex-1 bg-gray-50 dark:bg-gray-950 min-w-0 ${
              selectedContact ? 'flex' : 'hidden lg:flex'
            }`}
          >
            {selectedContact ? (
              <ChatWindow 
                contactId={selectedContact} 
                onClose={() => setSelectedContact(null)}
                onStartCall={() => setShowCallWindow(true)}
              />
            ) : (
              <div className="h-full flex items-center justify-center w-full">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-12 h-12 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Welcome to Tink
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-6">
                    Select a contact from the sidebar or search for users to start a chat
                  </p>
                  
                  {incomingRequests.length > 0 && (
                    <button
                      onClick={() => setShowFriendRequests(true)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <UserPlus className="w-4 h-4" />
                      You have {incomingRequests.length} friend request{incomingRequests.length > 1 ? 's' : ''}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
