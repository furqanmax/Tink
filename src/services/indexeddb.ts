import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { Message, Conversation, User } from '@/types';

interface VideoChatDB extends DBSchema {
  messages: {
    key: string;
    value: Message & { recipientId: string };
    indexes: {
      'by-conversation': string;
      'by-timestamp': number;
    };
  };
  conversations: {
    key: string;
    value: Conversation;
    indexes: {
      'by-lastMessageTime': number;
    };
  };
  contacts: {
    key: string;
    value: User;
    indexes: {
      'by-displayName': string;
      'by-status': string;
    };
  };
  callHistory: {
    key: string;
    value: {
      callId: string;
      remoteUserId: string;
      startTime: number;
      endTime?: number;
      duration: number;
      type: 'audio' | 'video';
      status: 'completed' | 'missed' | 'rejected';
    };
    indexes: {
      'by-startTime': number;
      'by-remoteUser': string;
    };
  };
  userKeys: {
    key: string;
    value: {
      userId: string;
      publicKey: string;
      secretKey: string;
      createdAt: number;
    };
  };
}

class IndexedDBService {
  private db: IDBPDatabase<VideoChatDB> | null = null;
  private readonly DB_NAME = 'video-chat-db';
  private readonly DB_VERSION = 1;

  async initialize(): Promise<void> {
    if (this.db) return;

    this.db = await openDB<VideoChatDB>(this.DB_NAME, this.DB_VERSION, {
      upgrade(db) {
        // Messages store
        if (!db.objectStoreNames.contains('messages')) {
          const messageStore = db.createObjectStore('messages', { keyPath: 'messageId' });
          messageStore.createIndex('by-conversation', 'conversationId');
          messageStore.createIndex('by-timestamp', 'timestamp');
        }

        // Conversations store
        if (!db.objectStoreNames.contains('conversations')) {
          const convStore = db.createObjectStore('conversations', { keyPath: 'conversationId' });
          convStore.createIndex('by-lastMessageTime', 'lastMessageTime');
        }

        // Contacts store
        if (!db.objectStoreNames.contains('contacts')) {
          const contactStore = db.createObjectStore('contacts', { keyPath: 'uid' });
          contactStore.createIndex('by-displayName', 'displayName');
          contactStore.createIndex('by-status', 'status');
        }

        // Call history store
        if (!db.objectStoreNames.contains('callHistory')) {
          const callStore = db.createObjectStore('callHistory', { keyPath: 'callId' });
          callStore.createIndex('by-startTime', 'startTime');
          callStore.createIndex('by-remoteUser', 'remoteUserId');
        }

        // User keys store (for encryption)
        if (!db.objectStoreNames.contains('userKeys')) {
          db.createObjectStore('userKeys', { keyPath: 'userId' });
        }
      },
    });
  }

  // Messages
  async saveMessage(message: Message & { recipientId: string }): Promise<void> {
    if (!this.db) await this.initialize();
    await this.db!.put('messages', message);
  }

  async getMessages(conversationId: string, limit = 50): Promise<(Message & { recipientId: string })[]> {
    if (!this.db) await this.initialize();
    const allMessages = await this.db!.getAllFromIndex('messages', 'by-conversation', conversationId);
    return allMessages
      .sort((a, b) => a.timestamp - b.timestamp)
      .slice(-limit);
  }

  async getMessage(messageId: string): Promise<(Message & { recipientId: string }) | undefined> {
    if (!this.db) await this.initialize();
    return await this.db!.get('messages', messageId);
  }

  async deleteMessage(messageId: string): Promise<void> {
    if (!this.db) await this.initialize();
    await this.db!.delete('messages', messageId);
  }

  // Conversations
  async saveConversation(conversation: Conversation): Promise<void> {
    if (!this.db) await this.initialize();
    await this.db!.put('conversations', conversation);
  }

  async getConversation(conversationId: string): Promise<Conversation | undefined> {
    if (!this.db) await this.initialize();
    return await this.db!.get('conversations', conversationId);
  }

  async getConversations(): Promise<Conversation[]> {
    if (!this.db) await this.initialize();
    const conversations = await this.db!.getAll('conversations');
    return conversations.sort((a, b) => b.lastMessageTime - a.lastMessageTime);
  }

  async deleteConversation(conversationId: string): Promise<void> {
    if (!this.db) await this.initialize();
    await this.db!.delete('conversations', conversationId);
    
    // Also delete associated messages
    const messages = await this.getMessages(conversationId, 1000);
    const tx = this.db!.transaction('messages', 'readwrite');
    for (const msg of messages) {
      await tx.store.delete(msg.messageId);
    }
  }

  // Contacts
  async saveContact(contact: User): Promise<void> {
    if (!this.db) await this.initialize();
    await this.db!.put('contacts', contact);
  }

  async getContact(uid: string): Promise<User | undefined> {
    if (!this.db) await this.initialize();
    return await this.db!.get('contacts', uid);
  }

  async getContacts(): Promise<User[]> {
    if (!this.db) await this.initialize();
    return await this.db!.getAll('contacts');
  }

  async deleteContact(uid: string): Promise<void> {
    if (!this.db) await this.initialize();
    await this.db!.delete('contacts', uid);
  }

  // Call History
  async saveCallHistory(call: VideoChatDB['callHistory']['value']): Promise<void> {
    if (!this.db) await this.initialize();
    await this.db!.put('callHistory', call);
  }

  async getCallHistory(limit = 50): Promise<VideoChatDB['callHistory']['value'][]> {
    if (!this.db) await this.initialize();
    const calls = await this.db!.getAll('callHistory');
    return calls
      .sort((a, b) => b.startTime - a.startTime)
      .slice(0, limit);
  }

  async getCallsWithUser(userId: string, limit = 20): Promise<VideoChatDB['callHistory']['value'][]> {
    if (!this.db) await this.initialize();
    const calls = await this.db!.getAllFromIndex('callHistory', 'by-remoteUser', userId);
    return calls
      .sort((a, b) => b.startTime - a.startTime)
      .slice(0, limit);
  }

  // User Keys (for encryption)
  async saveUserKeys(userId: string, publicKey: string, secretKey: string): Promise<void> {
    if (!this.db) await this.initialize();
    await this.db!.put('userKeys', {
      userId,
      publicKey,
      secretKey,
      createdAt: Date.now(),
    });
  }

  async getUserKeys(userId: string): Promise<{ publicKey: string; secretKey: string } | undefined> {
    if (!this.db) await this.initialize();
    const keys = await this.db!.get('userKeys', userId);
    if (keys) {
      return { publicKey: keys.publicKey, secretKey: keys.secretKey };
    }
    return undefined;
  }

  // Cleanup
  async deleteOldMessages(conversationId: string, keepCount = 500): Promise<void> {
    if (!this.db) await this.initialize();
    
    const messages = await this.getMessages(conversationId, 1000);
    if (messages.length > keepCount) {
      const toDelete = messages.slice(0, messages.length - keepCount);
      const tx = this.db!.transaction('messages', 'readwrite');
      
      for (const msg of toDelete) {
        await tx.store.delete(msg.messageId);
      }
    }
  }

  async clearAllData(): Promise<void> {
    if (!this.db) await this.initialize();
    await this.db!.clear('messages');
    await this.db!.clear('conversations');
    await this.db!.clear('contacts');
    await this.db!.clear('callHistory');
    await this.db!.clear('userKeys');
  }
}

export const indexedDBService = new IndexedDBService();
