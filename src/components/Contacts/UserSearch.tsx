import { useState, useEffect, useCallback } from 'react';
import { collection, query, where, getDocs, orderBy, limit, startAt, endAt } from 'firebase/firestore';
import { firestore } from '@/config/firebase';
import { useAuthStore } from '@/store/authStore';
import { User } from '@/types';
import { Search, UserPlus, X } from 'lucide-react';

interface UserSearchProps {
  onSelectContact: (userId: string) => void;
}

export function UserSearch({ onSelectContact }: UserSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { user } = useAuthStore();

  const searchUsers = useCallback(async (searchText: string) => {
    if (!searchText.trim() || !user) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    try {
      const usersRef = collection(firestore, 'users');
      const searchLower = searchText.toLowerCase();
      
      // Search by displayName or email
      const q = query(
        usersRef,
        where('displayName', '>=', searchLower),
        where('displayName', '<=', searchLower + '\uf8ff'),
        limit(10)
      );

      const snapshot = await getDocs(q);
      const results = snapshot.docs
        .map(doc => ({ ...doc.data(), uid: doc.id } as User))
        .filter(u => u.uid !== user.uid); // Exclude current user

      setSearchResults(results);
      setShowResults(true);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchUsers(searchQuery);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, searchUsers]);

  const handleSelectUser = (selectedUser: User) => {
    onSelectContact(selectedUser.uid);
    setSearchQuery('');
    setShowResults(false);
    setSearchResults([]);
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search users..."
          className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
        />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              setShowResults(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {showResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 max-h-64 overflow-y-auto">
          {searchResults.map((result) => (
            <button
              key={result.uid}
              onClick={() => handleSelectUser(result)}
              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                {result.photoURL ? (
                  <img
                    src={result.photoURL}
                    alt={result.displayName || ''}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-blue-600 font-medium text-sm">
                    {(result.displayName || result.email || '?')[0].toUpperCase()}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 truncate">
                  {result.displayName || 'Unknown User'}
                </p>
                <p className="text-sm text-gray-500 truncate">{result.email}</p>
              </div>
              <UserPlus className="w-4 h-4 text-blue-500" />
            </button>
          ))}
        </div>
      )}

      {/* No Results */}
      {showResults && searchQuery && !loading && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50">
          <p className="text-center text-gray-500 text-sm">No users found</p>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50">
          <div className="flex justify-center">
            <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      )}
    </div>
  );
}
