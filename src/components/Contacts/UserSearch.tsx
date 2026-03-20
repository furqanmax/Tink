import { useState, useEffect, useCallback } from 'react';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { firestore } from '@/config/firebase';
import { useAuthStore } from '@/store/authStore';
import { useFriendRequestStore } from '@/store/friendRequestStore';
import { User } from '@/types';
import { Search, UserPlus, X, MessageCircle, Clock, Inbox, ShieldX } from 'lucide-react';

interface UserSearchProps {
  onSelectContact: (userId: string) => void;
  onOpenRequests?: () => void;
}

export function UserSearch({ onSelectContact, onOpenRequests }: UserSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [sendingTo, setSendingTo] = useState<string | null>(null);
  const [requestError, setRequestError] = useState<string | null>(null);
  const { user, userProfile } = useAuthStore();
  const { sendFriendRequest, incomingRequests, outgoingRequests } = useFriendRequestStore();

  const outgoingByRecipient = new Set(outgoingRequests.map((request) => request.recipientId));
  const incomingBySender = new Set(incomingRequests.map((request) => request.senderId));

  const searchUsers = useCallback(async (searchText: string) => {
    if (!searchText.trim() || !user) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    try {
      const usersRef = collection(firestore, 'users');
      const trimmedSearch = searchText.trim();
      
      // Try display name prefix match.
      const displayNameQuery = query(
        usersRef,
        where('displayName', '>=', trimmedSearch),
        where('displayName', '<=', trimmedSearch + '\uf8ff'),
        limit(10)
      );

      // Fallback to email prefix match for users without matching display names.
      const emailQuery = query(
        usersRef,
        where('email', '>=', trimmedSearch),
        where('email', '<=', trimmedSearch + '\uf8ff'),
        limit(10)
      );

      const [displayNameSnapshot, emailSnapshot] = await Promise.all([
        getDocs(displayNameQuery),
        getDocs(emailQuery),
      ]);

      const byId = new Map<string, User>();
      for (const userDoc of [...displayNameSnapshot.docs, ...emailSnapshot.docs]) {
        if (userDoc.id === user.uid) continue;
        byId.set(userDoc.id, { ...userDoc.data(), uid: userDoc.id } as User);
      }

      setSearchResults(Array.from(byId.values()));
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

  const clearSearch = () => {
    setSearchQuery('');
    setShowResults(false);
    setSearchResults([]);
  };

  const handleOpenChat = (selectedUser: User) => {
    onSelectContact(selectedUser.uid);
    clearSearch();
  };

  const handleSendRequest = async (selectedUser: User) => {
    setRequestError(null);
    setSendingTo(selectedUser.uid);
    try {
      await sendFriendRequest(
        selectedUser.uid,
        selectedUser.displayName || selectedUser.email || 'Unknown User'
      );
    } catch (error) {
      setRequestError((error as Error).message);
    } finally {
      setSendingTo(null);
    }
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
          className="w-full pl-10 pr-10 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
        />
        {searchQuery && (
          <button
            onClick={() => {
              clearSearch();
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {showResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 py-2 z-50 max-h-64 overflow-y-auto">
          {searchResults.map((result) => (
            <div
              key={result.uid}
              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left"
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
                <p className="font-medium text-gray-900 dark:text-gray-100 truncate">
                  {result.displayName || 'Unknown User'}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{result.email}</p>
              </div>

              {userProfile?.blockedUsers?.includes(result.uid) ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs bg-red-100 text-red-700 rounded-lg">
                  <ShieldX className="w-3.5 h-3.5" />
                  Blocked
                </span>
              ) : userProfile?.friends?.includes(result.uid) ? (
                <button
                  type="button"
                  onClick={() => handleOpenChat(result)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Chat
                </button>
              ) : incomingBySender.has(result.uid) ? (
                <button
                  type="button"
                  onClick={onOpenRequests}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors"
                >
                  <Inbox className="w-3.5 h-3.5" />
                  Incoming
                </button>
              ) : outgoingByRecipient.has(result.uid) ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs bg-gray-100 text-gray-600 rounded-lg">
                  <Clock className="w-3.5 h-3.5" />
                  Sent
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => handleSendRequest(result)}
                  disabled={sendingTo === result.uid}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors disabled:opacity-60"
                >
                  {sendingTo === result.uid ? (
                    <div className="w-3.5 h-3.5 border-2 border-blue-700 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <UserPlus className="w-3.5 h-3.5" />
                  )}
                  Add
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {requestError && (
        <p className="mt-2 text-xs text-red-600">{requestError}</p>
      )}

      {/* No Results */}
      {showResults && searchQuery && !loading && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 py-4 z-50">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">No users found</p>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 py-4 z-50">
          <div className="flex justify-center">
            <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      )}
    </div>
  );
}
