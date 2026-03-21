import { create } from 'zustand';
import { collection, query, where, orderBy, limit, onSnapshot, serverTimestamp, getDocs, Unsubscribe, doc, setDoc, getDoc, writeBatch, updateDoc } from 'firebase/firestore';
import { firestore, auth } from '@/config/firebase';
import { Message, User } from '@/types';
import { indexedDBService } from '@/services/indexeddb';
import { EncryptionService } from '@/services/encryption';
import { v4 as uuidv4 } from 'uuid';

const publicKeyCache = new Map<string, string>();

function normalizeTimestamp(value: any): number {
  if (!value) return Date.now();
  if (typeof value === 'number') return value;
  if (value instanceof Date) return value.getTime();
  if (typeof value.toMillis === 'function') return value.toMillis();
  return Date.now();
}

async function getUserPublicKey(
  userId: string,
  options?: { forceRefresh?: boolean }
): Promise<string> {
  const cached = publicKeyCache.get(userId);
  if (cached && !options?.forceRefresh) return cached;

  const userDoc = await getDoc(doc(firestore, 'users', userId));
  const userData = userDoc.data() as User | undefined;
  if (!userData?.publicKey) {
    throw new Error('Recipient public key not available');
  }
  publicKeyCache.set(userId, userData.publicKey);
  return userData.publicKey;
}

async function decryptIfNeeded(
  data: any,
  messageId: string,
  currentUserId: string,
  conversationId: string
): Promise<Message> {
  const [uid1, uid2] = conversationId.split('_');
  const recipientId = data.recipientId || (data.senderId === uid1 ? uid2 : uid1);
  const senderId = data.senderId || uid1;

  let content = data.content as string | undefined;
  let contentEncrypted = data.contentEncrypted as string | undefined;
  let nonce = data.nonce as string | undefined;

  if (!content && senderId === currentUserId) {
    const local = await indexedDBService.getMessage(messageId);
    if (local?.content) {
      content = local.content;
    }
  }

  if (!content && contentEncrypted && nonce) {
    try {
      const { secretKey } = await EncryptionService.getOrCreateUserKeys(currentUserId);
      const otherUserId = senderId === currentUserId ? recipientId : senderId;
      let otherPublicKey = await getUserPublicKey(otherUserId);
      
      try {
        content = EncryptionService.decryptMessage(contentEncrypted, nonce, otherPublicKey, secretKey);
      } catch (error) {
        // Fallback: if decryption fails, try refreshing the public key
        otherPublicKey = await getUserPublicKey(otherUserId, { forceRefresh: true });
        content = EncryptionService.decryptMessage(contentEncrypted, nonce, otherPublicKey, secretKey);
      }
    } catch (error) {
      console.warn('Failed to decrypt message:', error);
      // Don't set content here, let it fall through to show [Encrypted message] in UI
    }
  }

  return {
    messageId,
    conversationId,
    senderId,
    senderName: data.senderName || 'Unknown',
    recipientId,
    content: content || '',
    contentEncrypted,
    nonce,
    timestamp: normalizeTimestamp(data.timestamp || data.createdAt),
    isRead: !!data.isRead,
    isEdited: !!data.isEdited,
    type: data.type || 'text',
    replyTo: data.replyTo,
  };
}

interface ChatState {
  conversations: Record<string, Message[]>;
  activeConversationId: string | null;
  replyingTo: Message | null;
  editingMessage: Message | null;
  loading: boolean;
  error: string | null;
  isOffline: boolean;
  unsubscribers: Unsubscribe[];
  
  loadConversationHistory: (conversationId: string, currentUserId: string) => Promise<void>;
  subscribeToMessages: (conversationId: string, currentUserId: string) => Unsubscribe;
  sendMessage: (conversationId: string, content: string, replyTo?: Message) => Promise<void>;
  editMessage: (conversationId: string, messageId: string, newContent: string) => Promise<void>;
  forwardMessages: (conversationId: string, messages: Message[]) => Promise<void>;
  setReplyingTo: (message: Message | null) => void;
  setEditingMessage: (message: Message | null) => void;
  addLocalMessage: (message: Message) => void;
  updateMessage: (conversationId: string, messageId: string, updates: Partial<Message>) => void;
  setActiveConversation: (conversationId: string | null) => void;
  markAsRead: (conversationId: string) => Promise<void>;
  deleteMessages: (conversationId: string, messageIds: string[]) => Promise<void>;
  deleteChat: (conversationId: string) => Promise<void>;
  getUserPublicKey: (userId: string, options?: { forceRefresh?: boolean }) => Promise<string>;
  setOffline: (isOffline: boolean) => void;
  cleanup: () => void;
}

function mergeMessages(existing: Message[], incoming: Message[]): Message[] {
  const byId = new Map<string, Message>();

  for (const msg of existing) {
    byId.set(msg.messageId, msg);
  }

  for (const msg of incoming) {
    const prev = byId.get(msg.messageId);
    if (!prev) {
      byId.set(msg.messageId, msg);
      continue;
    }

    const prevContent = prev.content && prev.content !== '[Unable to decrypt]';
    const nextContent = msg.content && msg.content !== '[Unable to decrypt]';

    byId.set(msg.messageId, {
      ...prev,
      ...msg,
      content: nextContent ? msg.content : prevContent ? prev.content : msg.content || prev.content || '',
    });
  }

  return Array.from(byId.values()).sort((a, b) => a.timestamp - b.timestamp);
}

export const useChatStore = create<ChatState>((set, get) => ({
  conversations: {},
  activeConversationId: null,
  replyingTo: null,
  editingMessage: null,
  loading: false,
  error: null,
  isOffline: !navigator.onLine,
  unsubscribers: [],

  loadConversationHistory: async (conversationId: string, currentUserId: string) => {
    if (!currentUserId) return;

    set({ loading: true });
    try {
      // Load from IndexedDB first for immediate display
      const localMessages = await indexedDBService.getMessages(conversationId, 50);
      
      set((state) => ({
        conversations: {
          ...state.conversations,
          [conversationId]: localMessages,
        },
      }));

      // Sync with Firestore
      const q = query(
        collection(firestore, 'messages'),
        where('conversationId', '==', conversationId),
        orderBy('timestamp', 'desc'),
        limit(50)
      );

      const snapshot = await getDocs(q);
      const messages = await Promise.all(
        snapshot.docs
          .map((docSnap) => ({ ...docSnap.data(), messageId: docSnap.id }))
          .map((data) => decryptIfNeeded(data, data.messageId, currentUserId, conversationId))
      );

      set((state) => ({
        conversations: {
          ...state.conversations,
          [conversationId]: mergeMessages(
            state.conversations[conversationId] || [],
            messages.reverse()
          ),
        },
      }));

      // Update IndexedDB with server messages
      for (const msg of messages) {
        await indexedDBService.saveMessage({ ...msg, recipientId: msg.recipientId });
      }
    } catch (error) {
      console.error('Failed to load conversation:', error);
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  subscribeToMessages: (conversationId: string, currentUserId: string) => {
    if (!currentUserId) return () => {};

    const q = query(
      collection(firestore, 'messages'),
      where('conversationId', '==', conversationId)
    );

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const messages = await Promise.all(
        snapshot.docs
          .map((docSnap) => ({ ...docSnap.data(), messageId: docSnap.id }))
          .map((data) => decryptIfNeeded(data, data.messageId, currentUserId, conversationId))
      );
      
      set((state) => ({
        conversations: {
          ...state.conversations,
          [conversationId]: mergeMessages(state.conversations[conversationId] || [], messages),
        },
      }));

      // Save to IndexedDB for offline access
      for (const msg of messages) {
        await indexedDBService.saveMessage({ ...msg, recipientId: msg.recipientId });
      }
    }, (error) => {
      console.error('Message subscription error:', error);
    });

    set((state) => ({
      unsubscribers: [...state.unsubscribers, unsubscribe],
    }));

    return unsubscribe;
  },

  sendMessage: async (conversationId: string, content: string, replyTo?: Message) => {
    const currentUser = auth.currentUser;
    if (!currentUser) throw new Error('Not authenticated');

    try {
      const messageId = uuidv4();
      const timestamp = Date.now();

      // Get recipient ID from conversation ID
      const [uid1, uid2] = conversationId.split('_');
      const recipientId = currentUser.uid === uid1 ? uid2 : uid1;

      const { secretKey } = await EncryptionService.getOrCreateUserKeys(currentUser.uid);
      const recipientPublicKey = await getUserPublicKey(recipientId, { forceRefresh: true });
      const encrypted = EncryptionService.encryptMessage(content, recipientPublicKey, secretKey);

      const messageData: any = {
        messageId,
        conversationId,
        senderId: currentUser.uid,
        senderName: currentUser.displayName || currentUser.email,
        recipientId,
        contentEncrypted: encrypted.ciphertext,
        nonce: encrypted.nonce,
        timestamp: serverTimestamp(),
        isRead: false,
        type: 'text',
        createdAt: serverTimestamp(),
      };

      if (replyTo) {
        messageData.replyTo = {
          messageId: replyTo.messageId,
          senderId: replyTo.senderId,
          senderName: replyTo.senderName,
          content: replyTo.content,
          type: replyTo.type,
        };
      }

      // Create message document (idempotent)
      await setDoc(doc(firestore, 'messages', messageId), messageData);

      // Save to IndexedDB immediately for optimistic UI
      const optimisticMessage: Message & { recipientId: string } = {
        messageId,
        conversationId,
        senderId: currentUser.uid,
        senderName: currentUser.displayName || currentUser.email || 'You',
        recipientId,
        content,
        contentEncrypted: encrypted.ciphertext,
        nonce: encrypted.nonce,
        timestamp,
        isRead: false,
        type: 'text',
        replyTo: replyTo ? {
          messageId: replyTo.messageId,
          senderId: replyTo.senderId,
          senderName: replyTo.senderName,
          content: replyTo.content,
          type: replyTo.type,
        } : undefined,
      };

      await indexedDBService.saveMessage(optimisticMessage);

      set((state) => {
        const existing = state.conversations[conversationId] || [];
        if (existing.some((msg) => msg.messageId === messageId)) {
          return state;
        }
        return {
          conversations: {
            ...state.conversations,
            [conversationId]: mergeMessages(existing, [optimisticMessage]),
          },
        };
      });

    } catch (error) {
      console.error('Failed to send message:', error);
      throw error;
    }
  },

  editMessage: async (conversationId: string, messageId: string, newContent: string) => {
    const currentUser = auth.currentUser;
    if (!currentUser) throw new Error('Not authenticated');

    try {
      const [uid1, uid2] = conversationId.split('_');
      const recipientId = currentUser.uid === uid1 ? uid2 : uid1;

      const { secretKey } = await EncryptionService.getOrCreateUserKeys(currentUser.uid);
      const recipientPublicKey = await getUserPublicKey(recipientId, { forceRefresh: true });
      const encrypted = EncryptionService.encryptMessage(newContent, recipientPublicKey, secretKey);

      const updates = {
        contentEncrypted: encrypted.ciphertext,
        nonce: encrypted.nonce,
        isEdited: true,
        updatedAt: serverTimestamp(),
      };

      await updateDoc(doc(firestore, 'messages', messageId), updates);

      // Update local state and IndexedDB
      const existing = await indexedDBService.getMessage(messageId);
      if (existing) {
        const updatedMessage = {
          ...existing,
          content: newContent,
          contentEncrypted: encrypted.ciphertext,
          nonce: encrypted.nonce,
          isEdited: true,
        };
        await indexedDBService.saveMessage(updatedMessage);
        get().updateMessage(conversationId, messageId, {
          content: newContent,
          isEdited: true,
        });
      }
    } catch (error) {
      console.error('Failed to edit message:', error);
      throw error;
    }
  },

  forwardMessages: async (conversationId: string, messages: Message[]) => {
    const currentUser = auth.currentUser;
    if (!currentUser) throw new Error('Not authenticated');

    try {
      const [uid1, uid2] = conversationId.split('_');
      const recipientId = currentUser.uid === uid1 ? uid2 : uid1;
      const { secretKey } = await EncryptionService.getOrCreateUserKeys(currentUser.uid);
      const recipientPublicKey = await getUserPublicKey(recipientId, { forceRefresh: true });

      for (const msg of messages) {
        const messageId = uuidv4();
        const timestamp = Date.now();
        const content = msg.type === 'file' ? `[Forwarded File: ${msg.content}]` : msg.content;
        const encrypted = EncryptionService.encryptMessage(content, recipientPublicKey, secretKey);

        const messageData: any = {
          messageId,
          conversationId,
          senderId: currentUser.uid,
          senderName: currentUser.displayName || currentUser.email,
          recipientId,
          contentEncrypted: encrypted.ciphertext,
          nonce: encrypted.nonce,
          timestamp: serverTimestamp(),
          isRead: false,
          type: 'text',
          createdAt: serverTimestamp(),
          forwardedFrom: msg.senderName,
        };

        await setDoc(doc(firestore, 'messages', messageId), messageData);

        const optimisticMessage: Message & { recipientId: string } = {
          messageId,
          conversationId,
          senderId: currentUser.uid,
          senderName: currentUser.displayName || currentUser.email || 'You',
          recipientId,
          content,
          contentEncrypted: encrypted.ciphertext,
          nonce: encrypted.nonce,
          timestamp,
          isRead: false,
          type: 'text',
          forwardedFrom: msg.senderName,
        };

        await indexedDBService.saveMessage(optimisticMessage);
        
        get().addLocalMessage(optimisticMessage);
      }
    } catch (error) {
      console.error('Failed to forward messages:', error);
      throw error;
    }
  },

  setReplyingTo: (message) => {
    set({ replyingTo: message });
  },

  setEditingMessage: (message) => {
    set({ editingMessage: message });
  },

  addLocalMessage: (message) => {
    set((state) => {
      const existing = state.conversations[message.conversationId] || [];
      return {
        conversations: {
          ...state.conversations,
          [message.conversationId]: mergeMessages(existing, [message]),
        },
      };
    });
  },

  updateMessage: (conversationId: string, messageId: string, updates: Partial<Message>) => {
    set((state) => ({
      conversations: {
        ...state.conversations,
        [conversationId]: (state.conversations[conversationId] || []).map((msg) =>
          msg.messageId === messageId ? { ...msg, ...updates } : msg
        ),
      },
    }));
  },

  setActiveConversation: (conversationId: string | null) => {
    set({ activeConversationId: conversationId });
  },

  markAsRead: async (conversationId: string) => {
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    try {
      const q = query(
        collection(firestore, 'messages'),
        where('conversationId', '==', conversationId),
        where('recipientId', '==', currentUser.uid),
        where('isRead', '==', false)
      );

      const snapshot = await getDocs(q);
      if (snapshot.empty) return;

      const batch = writeBatch(firestore);
      snapshot.docs.forEach((docSnap) => {
        batch.update(docSnap.ref, { isRead: true });
      });
      await batch.commit();

      set((state) => ({
        conversations: {
          ...state.conversations,
          [conversationId]: (state.conversations[conversationId] || []).map((msg) =>
            msg.recipientId === currentUser.uid ? { ...msg, isRead: true } : msg
          ),
        },
      }));
    } catch (error) {
      console.error('Failed to mark messages as read:', error);
    }
  },

  deleteMessages: async (conversationId: string, messageIds: string[]) => {
    try {
      const batch = writeBatch(firestore);
      messageIds.forEach((id) => {
        batch.delete(doc(firestore, 'messages', id));
      });
      await batch.commit();

      set((state) => ({
        conversations: {
          ...state.conversations,
          [conversationId]: (state.conversations[conversationId] || []).filter(
            (msg) => !messageIds.includes(msg.messageId)
          ),
        },
      }));

      for (const id of messageIds) {
        await indexedDBService.deleteMessage(id);
      }
    } catch (error) {
      console.error('Failed to delete messages:', error);
      throw error;
    }
  },

  deleteChat: async (conversationId: string) => {
    try {
      const batch = writeBatch(firestore);
      batch.delete(doc(firestore, 'conversations', conversationId));

      const q = query(
        collection(firestore, 'messages'),
        where('conversationId', '==', conversationId)
      );
      const snapshot = await getDocs(q);
      snapshot.docs.forEach((docSnap) => {
        batch.delete(docSnap.ref);
      });
      await batch.commit();

      set((state) => {
        const nextConversations = { ...state.conversations };
        delete nextConversations[conversationId];
        return { conversations: nextConversations };
      });

      const localMessages = await indexedDBService.getMessages(conversationId, 10000);
      for (const msg of localMessages) {
        await indexedDBService.deleteMessage(msg.messageId);
      }
    } catch (error) {
      console.error('Failed to delete chat:', error);
      throw error;
    }
  },

  getUserPublicKey: async (userId: string, options?: { forceRefresh?: boolean }) => {
    return getUserPublicKey(userId, options);
  },

  setOffline: (isOffline: boolean) => {
    set({ isOffline });
  },

  cleanup: () => {
    const { unsubscribers } = get();
    unsubscribers.forEach((unsub) => unsub());
    publicKeyCache.clear();
    set({ unsubscribers: [], conversations: {} });
  },
}));
