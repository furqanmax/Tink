import { useState, useEffect, useRef } from 'react';
import { doc, getDoc, setDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { firestore } from '@/config/firebase';
import { useAuthStore } from '@/store/authStore';
import { useChatStore } from '@/store/chatStore';
import { useCallStore } from '@/store/callStore';
import { User } from '@/types';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { FilePicker } from './FilePicker';
import { Video, Phone, MoreVertical, ArrowLeft, Paperclip } from 'lucide-react';

interface ChatWindowProps {
  contactId: string;
  onClose: () => void;
  onStartCall?: () => void;
}

export function ChatWindow({ contactId, onClose, onStartCall }: ChatWindowProps) {
  const { user } = useAuthStore();
  const { conversations, loadConversationHistory, subscribeToMessages, sendMessage, markAsRead } = useChatStore();
  const { initiateCall } = useCallStore();
  const [contact, setContact] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFilePicker, setShowFilePicker] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const conversationId = user ? [user.uid, contactId].sort().join('_') : '';
  const messages = conversations[conversationId] || [];

  // Load contact info
  useEffect(() => {
    const loadContact = async () => {
      try {
        const contactDoc = await getDoc(doc(firestore, 'users', contactId));
        if (contactDoc.exists()) {
          setContact({ ...contactDoc.data(), uid: contactId } as User);
        }
      } catch (error) {
        console.error('Failed to load contact:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContact();
  }, [contactId]);

  // Load messages and subscribe
  useEffect(() => {
    if (!user || !conversationId) return;

    loadConversationHistory(conversationId, user.uid);
    const unsubscribe = subscribeToMessages(conversationId, user.uid);

    // Ensure conversation document exists
    const ensureConversation = async () => {
      const convRef = doc(firestore, 'conversations', conversationId);
      const convDoc = await getDoc(convRef);
      
      if (!convDoc.exists() && user && contact) {
        await setDoc(convRef, {
          participants: [user.uid, contactId],
          participantNames: [user.displayName || user.email, contact?.displayName || contact?.email],
          lastMessage: '',
          lastMessageTime: serverTimestamp(),
          createdAt: serverTimestamp(),
        });
      }
    };

    ensureConversation();

    return () => {
      unsubscribe?.();
    };
  }, [user, contactId, conversationId, contact]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (conversationId) {
      markAsRead(conversationId);
    }
  }, [messages, conversationId, markAsRead]);

  const handleSendMessage = async (content: string) => {
    if (!user || !conversationId) return;
    
    try {
      await sendMessage(conversationId, content);
      
      // Update conversation last message
      await updateDoc(doc(firestore, 'conversations', conversationId), {
        lastMessage: content,
        lastMessageTime: serverTimestamp(),
      });
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const handleVideoCall = () => {
    if (contact) {
      initiateCall(contactId, contact.displayName || 'Unknown', true);
      onStartCall?.();
    }
  };

  const handleAudioCall = () => {
    if (contact) {
      initiateCall(contactId, contact.displayName || 'Unknown', false);
      onStartCall?.();
    }
  };

  const handleFileSelect = (file: File) => {
    setShowFilePicker(false);
    console.log('Selected file:', file);
  };

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!contact) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-gray-500">Contact not found</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* File Picker Modal */}
      {showFilePicker && (
        <FilePicker
          onFileSelect={handleFileSelect}
          onCancel={() => setShowFilePicker(false)}
        />
      )}

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="lg:hidden p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="relative">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
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
                contact.status === 'online'
                  ? 'bg-green-500'
                  : contact.status === 'busy'
                  ? 'bg-yellow-500'
                  : 'bg-gray-400'
              }`}
            />
          </div>
          
          <div>
            <h2 className="font-semibold text-gray-900">
              {contact.displayName || 'Unknown User'}
            </h2>
            <p className="text-sm text-gray-500">
              {contact.status === 'online' 
                ? 'Online' 
                : contact.status === 'busy'
                ? 'Busy'
                : 'Offline'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={handleAudioCall}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Voice call"
          >
            <Phone className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            onClick={handleVideoCall}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Video call"
          >
            <Video className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            onClick={() => setShowFilePicker(true)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Send file"
          >
            <Paperclip className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <MessageList messages={messages} currentUserId={user?.uid || ''} />
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}
