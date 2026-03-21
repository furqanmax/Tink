import { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { firestore } from '@/config/firebase';
import { useAuthStore } from '@/store/authStore';
import { User, Conversation } from '@/types';
import { formatDistanceToNow } from '@/utils/formatters';
import { derivePresenceStatus } from '@/utils/presence';

interface ContactsListProps {
  onSelectContact: (userId: string) => void;
  selectedContact: string | null;
}

interface ContactWithConversation extends User {
  conversation?: Conversation;
  unreadCount?: number;
}

function normalizeTimestamp(value: unknown): number {
  if (!value) return 0;
  if (typeof value === 'number') return value;
  if (value instanceof Date) return value.getTime();
  if (typeof value === 'object' && value !== null && 'toMillis' in value && typeof (value as any).toMillis === 'function') {
    return (value as any).toMillis();
  }
  return 0;
}

export function ContactsList({ onSelectContact, selectedContact }: ContactsListProps) {
  const { user } = useAuthStore();
  const [contacts, setContacts] = useState<ContactWithConversation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    setLoading(true);

    const q = query(
      collection(firestore, 'conversations'),
      where('participants', 'array-contains', user.uid)
    );

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      if (snapshot.empty) {
        setContacts([]);
        setLoading(false);
        return;
      }

      const conversations = snapshot.docs.map((docSnap) => ({
        ...docSnap.data(),
        conversationId: docSnap.id,
      })) as Conversation[];

      const contactPromises = conversations.map(async (conversation) => {
        const participants = conversation.participants || [];
        const otherUserId = participants.find((id) => id !== user.uid);
        if (!otherUserId) return null;

        const userDoc = await getDoc(doc(firestore, 'users', otherUserId));
        if (!userDoc.exists()) return null;

        return {
          ...userDoc.data(),
          uid: otherUserId,
          conversation,
        } as ContactWithConversation;
      });

      const results = await Promise.all(contactPromises);
      const filtered = results.filter(Boolean) as ContactWithConversation[];

      filtered.sort((a, b) => {
        const aTime = normalizeTimestamp(a.conversation?.lastMessageTime);
        const bTime = normalizeTimestamp(b.conversation?.lastMessageTime);
        return bTime - aTime;
      });

      setContacts(filtered);
      setLoading(false);
    }, (error) => {
      console.error('Failed to load conversations:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  if (loading) {
    return (
      <div className="p-4 space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg animate-pulse">
            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-24" />
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-32" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (contacts.length === 0) {
    return (
      <div className="p-8 text-center">
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          No contacts yet. Search for users to add friends.
        </p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-800">
      {contacts.map((contact) => (
        (() => {
          const presence = derivePresenceStatus({
            status: contact.status,
            lastSeen: (contact as any).lastSeen,
          });

          return (
        <button
          key={contact.uid}
          onClick={() => onSelectContact(contact.uid)}
          className={`w-full flex items-center gap-3 px-3 py-3 sm:p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left ${
            selectedContact === contact.uid ? 'bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-50 dark:hover:bg-blue-950/40' : ''
          }`}
        >
          <div className="relative">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              {contact.photoURL ? (
                <img
                  src={contact.photoURL}
                  alt={contact.displayName || ''}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-blue-600 font-medium">
                  {(contact.displayName || contact.email || '?')[0].toUpperCase()}
                </span>
              )}
            </div>
            <span
              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                presence === 'online'
                  ? 'bg-green-500'
                  : presence === 'busy'
                  ? 'bg-yellow-500'
                  : 'bg-gray-400'
              }`}
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="font-medium text-gray-900 dark:text-gray-100 truncate">
                {contact.displayName || 'Unknown User'}
              </p>
              {contact.conversation?.lastMessageTime && (
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {formatDistanceToNow(contact.conversation.lastMessageTime)}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
              {contact.conversation?.lastMessage || contact.email || 'No messages yet'}
            </p>
          </div>

          {contact.unreadCount && contact.unreadCount > 0 && (
            <span className="w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center flex-shrink-0">
              {contact.unreadCount}
            </span>
          )}
        </button>
          );
        })()
      ))}
    </div>
  );
}
