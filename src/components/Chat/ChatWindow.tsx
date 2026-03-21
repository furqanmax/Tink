import { useState, useEffect, useRef } from 'react';
import { doc, getDoc, setDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { firestore } from '@/config/firebase';
import { useAuthStore } from '@/store/authStore';
import { useChatStore } from '@/store/chatStore';
import { useCallStore } from '@/store/callStore';
import { useFriendRequestStore } from '@/store/friendRequestStore';
import { User, Message } from '@/types';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { FilePicker } from './FilePicker';
import { ChatExportService } from '@/services/chatExport';
import { ParticipantSelectionModal } from './ParticipantSelectionModal';
import { Download, Upload, Video, Phone, MoreVertical, ArrowLeft, Paperclip, UserMinus, ShieldX, MessageSquare, Trash2, CheckSquare, X } from 'lucide-react';
import { fileShareService } from '@/services/fileShare';
import { EncryptionService } from '@/services/encryption';
import { indexedDBService } from '@/services/indexeddb';
import { v4 as uuidv4 } from 'uuid';
import { derivePresenceStatus } from '@/utils/presence';

interface ChatWindowProps {
  contactId: string;
  onClose: () => void;
  onStartCall?: () => void;
}

export function ChatWindow({ contactId, onClose, onStartCall }: ChatWindowProps) {
  const { user, userProfile } = useAuthStore();
  const { 
    conversations, 
    loadConversationHistory, 
    subscribeToMessages, 
    sendMessage, 
    markAsRead, 
    addLocalMessage, 
    updateMessage, 
    deleteMessages, 
    deleteChat, 
    getUserPublicKey,
    replyingTo,
    setReplyingTo,
    editingMessage,
    setEditingMessage,
    editMessage
  } = useChatStore();
  const { initiateCall } = useCallStore();
  const { unfriendUser, blockUser } = useFriendRequestStore();
  const [contact, setContact] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFilePicker, setShowFilePicker] = useState(false);
  const [showActionsMenu, setShowActionsMenu] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [importData, setImportData] = useState<{ content: string; participants: string[] } | null>(null);
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
        const isFriend = !!userProfile?.friends?.includes(contactId);
        if (!isFriend) return;

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
  }, [user, userProfile, contactId, conversationId, contact]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (conversationId) {
      markAsRead(conversationId);
    }
  }, [messages, conversationId, markAsRead]);

  const handleSendMessage = async (content: string, replyTo?: Message) => {
    if (!user || !conversationId) return;
    
    try {
      await sendMessage(conversationId, content, replyTo);
      
      // Update conversation last message
      await updateDoc(doc(firestore, 'conversations', conversationId), {
        lastMessage: content,
        lastMessageTime: serverTimestamp(),
      });
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const handleEditMessage = async (messageId: string, newContent: string) => {
    if (!user || !conversationId) return;
    
    try {
      await editMessage(conversationId, messageId, newContent);
      
      // Update conversation last message if it was the last message
      const lastMsg = messages[messages.length - 1];
      if (lastMsg && lastMsg.messageId === messageId) {
        await updateDoc(doc(firestore, 'conversations', conversationId), {
          lastMessage: newContent,
          lastMessageTime: serverTimestamp(),
        });
      }
    } catch (error) {
      console.error('Failed to edit message:', error);
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

  const handleUnfriend = async () => {
    setActionError(null);
    try {
      await unfriendUser(contactId);
      setShowActionsMenu(false);
      onClose();
    } catch (error) {
      setActionError((error as Error).message);
    }
  };

  const handleExportChat = async () => {
    if (!user || !conversationId || !contact) return;
    try {
      const participants = [
        { uid: user.uid, displayName: user.displayName || user.email },
        { uid: contact.uid, displayName: contact.displayName || contact.email }
      ];
      await ChatExportService.exportChat(conversationId, participants, messages);
      setShowActionsMenu(false);
    } catch (error) {
      setActionError('Failed to export chat history');
    }
  };

  const handleImportChat = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user || !conversationId) return;

    try {
      const data = await ChatExportService.validateImport(file);
      
      // Basic validation: Check if this export belongs to this conversation
      if (data.conversationId !== conversationId) {
        const confirm = window.confirm('This export appears to be from a different conversation. Import anyway?');
        if (!confirm) return;
      }

      let importedCount = 0;
      for (const msg of data.messages) {
        // Only import if message doesn't already exist locally
        const existing = await indexedDBService.getMessage(msg.messageId);
        if (!existing) {
          // Map internal data if needed (e.g., ensure recipientId matches current context)
          await indexedDBService.saveMessage(msg);
          addLocalMessage(msg);
          importedCount++;
        }
      }

      alert(`Successfully imported ${importedCount} messages.`);
      setShowActionsMenu(false);
    } catch (error) {
      setActionError((error as Error).message);
    } finally {
      // Clear the input
      event.target.value = '';
    }
  };

  const handleImportWhatsApp = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user || !conversationId || !contact) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const content = e.target?.result as string;
      try {
        const participants = ChatExportService.extractWhatsAppParticipants(content);
        if (participants.length === 0) {
          throw new Error('No valid participants found in the WhatsApp export.');
        }
        setImportData({ content, participants });
        setShowActionsMenu(false);
      } catch (error) {
        setActionError((error as Error).message);
      }
    };
    reader.onerror = () => setActionError('Failed to read the file.');
    reader.readAsText(file);
    event.target.value = '';
  };

  const onConfirmWhatsAppImport = async (selectedName: string) => {
    if (!importData || !user || !conversationId || !contact) return;

    try {
      const { secretKey } = await EncryptionService.getOrCreateUserKeys(user.uid);
      const contactPublicKey = await getUserPublicKey(contactId, { forceRefresh: true });

      const parsedMessages = await ChatExportService.parseWhatsAppImport(
        importData.content,
        selectedName,
        conversationId,
        user.uid,
        contactId,
        user.displayName || user.email || 'You',
        contact.displayName || contact.email || 'Contact',
        contactPublicKey,
        secretKey
      );

      // Get existing messages for this conversation to prevent duplicates
      const existingMessages = conversations[conversationId] || [];
      
      let importedCount = 0;
      for (const msg of parsedMessages) {
        // Check if message already exists
        const isDuplicate = existingMessages.some(existing => 
          existing.messageId === msg.messageId || 
          (existing.timestamp === msg.timestamp && 
           existing.senderId === msg.senderId && 
           existing.content === msg.content)
        );

        if (!isDuplicate) {
          // Save to local DB
          await indexedDBService.saveMessage(msg);
          
          // Save to Firestore so other user can see them
          await setDoc(doc(firestore, 'messages', msg.messageId), {
            ...msg,
            timestamp: serverTimestamp(), // Use server timestamp for Firestore
            createdAt: serverTimestamp(),
          });

          addLocalMessage(msg);
          importedCount++;
        }
      }

      if (importedCount === 0) {
        alert('All messages in this file are already present in the chat.');
      } else {
        alert(`Successfully imported ${importedCount} new messages from WhatsApp.`);
      }
      setImportData(null);
    } catch (error) {
      setActionError((error as Error).message);
    }
  };

  const handleBlock = async () => {
    setActionError(null);
    const confirmed = window.confirm('Block this user? They will be removed from your friends and pending requests.');
    if (!confirmed) return;

    try {
      await blockUser(contactId);
      setShowActionsMenu(false);
      onClose();
    } catch (error) {
      setActionError((error as Error).message);
    }
  };

  const handleToggleSelection = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleDeleteSelected = async () => {
    if (selectedIds.size === 0 || !conversationId) return;
    
    const confirmed = window.confirm(`Delete ${selectedIds.size} selected message(s)?`);
    if (!confirmed) return;

    try {
      await deleteMessages(conversationId, Array.from(selectedIds));
      setSelectionMode(false);
      setSelectedIds(new Set());
    } catch (error) {
      setActionError('Failed to delete selected messages');
    }
  };

  const handleDeleteChat = async () => {
    if (!conversationId) return;
    const confirmed = window.confirm('Are you sure you want to delete this entire chat? This action cannot be undone.');
    if (!confirmed) return;

    try {
      await deleteChat(conversationId);
      setShowActionsMenu(false);
      onClose();
    } catch (error) {
      setActionError('Failed to delete chat');
    }
  };

  const handleFileSelect = async (file: File) => {
    setShowFilePicker(false);
    if (!user || !conversationId) return;

    const validation = fileShareService.validateFile(file);
    if (!validation.valid) {
      console.error(validation.error);
      return;
    }

    const messageId = uuidv4();
    const recipientId = contactId;
    const senderName = user.displayName || user.email || 'You';

    const buffer = await file.arrayBuffer();
    const hash = await EncryptionService.hashData(buffer);

    const fileMessage = {
      messageId,
      conversationId,
      senderId: user.uid,
      senderName,
      recipientId,
      content: file.name,
      timestamp: Date.now(),
      isRead: false,
      type: 'file' as const,
      fileData: {
        fileId: messageId,
        name: file.name,
        size: file.size,
        hash,
        mimeType: file.type,
      },
    };

    addLocalMessage(fileMessage);
    await indexedDBService.saveMessage({ ...fileMessage, recipientId });

    await setDoc(doc(firestore, 'messages', messageId), {
      ...fileMessage,
      createdAt: serverTimestamp(),
      timestamp: serverTimestamp(),
    });

    await updateDoc(doc(firestore, 'conversations', conversationId), {
      lastMessage: `File: ${file.name}`,
      lastMessageTime: serverTimestamp(),
    });

    await fileShareService.sendOrQueueFile({
      fileId: messageId,
      conversationId,
      recipientId,
      senderId: user.uid,
      senderName,
      name: file.name,
      type: file.type,
      size: file.size,
      hash,
      file,
      createdAt: Date.now(),
    });
  };

  useEffect(() => {
    if (!user || !conversationId) return;
    const userName = user.displayName || user.email || 'User';

    fileShareService.connect(conversationId, userName, {
      onPeerAvailable: () => {
        fileShareService.flushPending(conversationId).catch(() => {});
      },
      onReceived: async (file, meta) => {
        const downloadUrl = URL.createObjectURL(file);
        updateMessage(conversationId, meta.fileId, {
          fileData: {
            fileId: meta.fileId,
            name: meta.name,
            size: meta.size,
            hash: meta.hash,
            mimeType: meta.type,
            downloadUrl,
          },
        });

        const local = await indexedDBService.getMessage(meta.fileId);
        if (!local) {
          addLocalMessage({
            messageId: meta.fileId,
            conversationId,
            senderId: meta.senderId,
            senderName: meta.senderName,
            recipientId: user?.uid || '',
            content: meta.name,
            timestamp: Date.now(),
            isRead: false,
            type: 'file',
            fileData: {
              fileId: meta.fileId,
              name: meta.name,
              size: meta.size,
              hash: meta.hash,
              mimeType: meta.type,
              downloadUrl,
            },
          });
          await indexedDBService.saveMessage({
            messageId: meta.fileId,
            conversationId,
            senderId: meta.senderId,
            senderName: meta.senderName,
            recipientId: user?.uid || '',
            content: meta.name,
            timestamp: Date.now(),
            isRead: false,
            type: 'file',
            fileData: {
              fileId: meta.fileId,
              name: meta.name,
              size: meta.size,
              hash: meta.hash,
              mimeType: meta.type,
              downloadUrl,
            },
          });
        }
      },
    }).catch(() => {});

    return () => {
      fileShareService.disconnect(conversationId).catch(() => {});
    };
  }, [conversationId, user, updateMessage]);

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
        <p className="text-gray-500 dark:text-gray-400">Contact not found</p>
      </div>
    );
  }

  const presence = derivePresenceStatus({
    status: contact.status,
    lastSeen: (contact as any).lastSeen,
  });

  return (
    <div className="h-full min-h-0 flex flex-col bg-white dark:bg-gray-900 w-full">
      {/* WhatsApp Participant Selection Modal */}
      {importData && (
        <ParticipantSelectionModal
          participants={importData.participants}
          onSelect={onConfirmWhatsAppImport}
          onCancel={() => setImportData(null)}
        />
      )}

      {/* File Picker Modal */}
      {showFilePicker && (
        <FilePicker
          onFileSelect={handleFileSelect}
          onCancel={() => setShowFilePicker(false)}
        />
      )}

      {/* Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        {selectionMode ? (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  setSelectionMode(false);
                  setSelectedIds(new Set());
                }}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {selectedIds.size} selected
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDeleteSelected}
                disabled={selectedIds.size === 0}
                className={`p-2 rounded-lg transition-colors ${
                  selectedIds.size === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-red-600 hover:bg-red-50 dark:hover:bg-red-950'
                }`}
                title="Delete selected"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="lg:hidden p-2 -ml-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
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
              
              <div className="min-w-0">
                <h2 className="font-semibold text-gray-900 dark:text-gray-100 truncate">
                  {contact.displayName || 'Unknown User'}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {presence === 'online' ? 'Online' : presence === 'busy' ? 'Busy' : 'Offline'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 relative">
              <button 
                onClick={handleAudioCall}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                title="Voice call"
              >
                <Phone className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button 
                onClick={handleVideoCall}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                title="Video call"
              >
                <Video className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button 
                onClick={() => setShowFilePicker(true)}
                className="hidden sm:inline-flex p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                title="Send file"
              >
                <Paperclip className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button
            onClick={() => setShowActionsMenu((prev) => !prev)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          {showActionsMenu && (
            <div className="absolute right-0 top-12 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg py-1 z-30">
              <button
                onClick={() => {
                  setSelectionMode(true);
                  setShowActionsMenu(false);
                }}
                className="w-full px-3 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2"
              >
                <CheckSquare className="w-4 h-4" />
                Select Messages
              </button>
              <button
                onClick={handleExportChat}
                className="w-full px-3 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export Chat
              </button>
              <button
                onClick={handleDeleteChat}
                className="w-full px-3 py-2 text-sm text-left text-red-600 hover:bg-red-50 dark:hover:bg-red-950 flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Delete Chat
              </button>
              <label className="w-full px-3 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2 cursor-pointer">
                <Upload className="w-4 h-4" />
                Import Chat
                <input
                  type="file"
                  accept=".json"
                  className="hidden"
                  onChange={handleImportChat}
                />
              </label>
              <label className="w-full px-3 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2 cursor-pointer">
                <MessageSquare className="w-4 h-4" />
                Import WhatsApp (.txt)
                <input
                  type="file"
                  accept=".txt"
                  className="hidden"
                  onChange={handleImportWhatsApp}
                />
              </label>
              {userProfile?.friends?.includes(contactId) && (
                <button
                  onClick={handleUnfriend}
                  className="w-full px-3 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2"
                >
                  <UserMinus className="w-4 h-4" />
                  Unfriend
                </button>
              )}
              <button
                onClick={handleBlock}
                className="w-full px-3 py-2 text-sm text-left text-red-600 hover:bg-red-50 dark:hover:bg-red-950 flex items-center gap-2"
              >
                <ShieldX className="w-4 h-4" />
                Block
              </button>
            </div>
          )}
        </div>
      </>
    )}
  </div>

  {actionError && (
    <div className="px-4 py-2 border-b border-red-100 dark:border-red-900 bg-red-50 dark:bg-red-950">
      <p className="text-sm text-red-700">{actionError}</p>
    </div>
  )}

  {/* Messages */}
  <div className="flex-1 min-h-0 overflow-y-auto bg-gray-50 dark:bg-gray-950 overscroll-contain">
    <MessageList 
      messages={messages} 
      currentUserId={user?.uid || ''} 
      selectionMode={selectionMode}
      selectedIds={selectedIds}
      onToggleSelection={handleToggleSelection}
      onReply={(msg) => setReplyingTo(msg)}
      onEdit={(msg) => setEditingMessage(msg)}
    />
    <div ref={messagesEndRef} />
  </div>

  {/* Input */}
  <div className="bg-white dark:bg-gray-900 sticky bottom-0 left-0 right-0">
    <MessageInput 
      onSendMessage={handleSendMessage} 
      onEditMessage={handleEditMessage}
      replyingTo={replyingTo}
      editingMessage={editingMessage}
      onCancelReply={() => setReplyingTo(null)}
      onCancelEdit={() => setEditingMessage(null)}
    />
  </div>
</div>
  );
}
