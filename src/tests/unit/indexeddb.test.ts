import { describe, it, expect, beforeEach } from 'vitest';
import { indexedDBService } from '@/services/indexeddb';

const baseMessage = {
  messageId: 'msg-1',
  conversationId: 'conv-1',
  senderId: 'user-1',
  recipientId: 'user-2',
  senderName: 'User One',
  content: 'Hello',
  timestamp: Date.now(),
  isRead: false,
  type: 'text' as const,
};

describe('IndexedDBService', () => {
  beforeEach(async () => {
    await indexedDBService.clearAllData();
  });

  it('saves and loads messages', async () => {
    await indexedDBService.saveMessage(baseMessage);
    const messages = await indexedDBService.getMessages('conv-1', 10);
    expect(messages.length).toBe(1);
    expect(messages[0].content).toBe('Hello');
  });

  it('deletes old messages beyond keepCount', async () => {
    const conversationId = 'conv-2';
    for (let i = 0; i < 520; i += 1) {
      await indexedDBService.saveMessage({
        ...baseMessage,
        messageId: `msg-${i}`,
        conversationId,
        timestamp: Date.now() + i,
      });
    }

    await indexedDBService.deleteOldMessages(conversationId, 500);
    const remaining = await indexedDBService.getMessages(conversationId, 1000);
    expect(remaining.length).toBeLessThanOrEqual(500);
  });
});
