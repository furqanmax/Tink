import { create } from 'zustand';
import { collection, query, where, orderBy, limit, onSnapshot, serverTimestamp, getDocs, Unsubscribe, doc, setDoc, getDoc, writeBatch } from 'firebase/firestore';
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

  if (!content && contentEncrypted && nonce && senderId !== currentUserId) {
    try {
      const { secretKey } = await EncryptionService.getOrCreateUserKeys(currentUserId);
      const otherUserId = senderId === currentUserId ? recipientId : senderId;
      let otherPublicKey = await getUserPublicKey(otherUserId);
      try {
        content = EncryptionService.decryptMessage(contentEncrypted, nonce, otherPublicKey, secretKey);
      } catch (error) {
        otherPublicKey = await getUserPublicKey(otherUserId, { forceRefresh: true });
        content = EncryptionService.decryptMessage(contentEncrypted, nonce, otherPublicKey, secretKey);
      }
    } catch (error) {
      console.warn('Failed to decrypt message:', error);
      content = '[Unable to decrypt]';
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
    type: data.type || 'text',
  };
}

interface ChatState {
  conversations: Record<string, Message[]>;
  activeConversationId: string | null;
  loading: boolean;
  error: string | null;
  unsubscribers: Unsubscribe[];
  
  loadConversationHistory: (conversationId: string, currentUserId: string) => Promise<void>;
  subscribeToMessages: (conversationId: string, currentUserId: string) => Unsubscribe;
  sendMessage: (conversationId: string, content: string) => Promise<void>;
  setActiveConversation: (conversationId: string | null) => void;
  markAsRead: (conversationId: string) => Promise<void>;
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
  loading: false,
  error: null,
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

  sendMessage: async (conversationId: string, content: string) => {
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

      // Create message document (idempotent)
      await setDoc(doc(firestore, 'messages', messageId), {
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
      });

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

  cleanup: () => {
    const { unsubscribers } = get();
    unsubscribers.forEach((unsub) => unsub());
    publicKeyCache.clear();
    set({ unsubscribers: [], conversations: {} });
  },
}));
