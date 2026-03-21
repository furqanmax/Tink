import { Message } from '@/types';
import { v4 as uuidv4 } from 'uuid';
import { EncryptionService } from './encryption';

export interface ExportData {
  version: string;
  conversationId: string;
  exportDate: number;
  participants: {
    uid: string;
    displayName: string | null;
  }[];
  messages: Message[];
}

export class ChatExportService {
  /**
   * Export a conversation to a JSON file
   */
  static async exportChat(
    conversationId: string,
    participants: { uid: string; displayName: string | null }[],
    messages: Message[]
  ) {
    const exportData: ExportData = {
      version: '1.0.0',
      conversationId,
      exportDate: Date.now(),
      participants,
      messages,
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `chat_export_${conversationId}_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  /**
   * Validate and parse an imported chat file
   */
  static async validateImport(file: File): Promise<ExportData> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string) as ExportData;
          if (!data.version || !data.conversationId || !Array.isArray(data.messages)) {
            throw new Error('Invalid chat export file format');
          }
          resolve(data);
        } catch (error) {
          reject(new Error('Failed to parse chat export file'));
        }
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsText(file);
    });
  }

  /**
   * Extract unique participants from WhatsApp .txt content
   */
  static extractWhatsAppParticipants(content: string): string[] {
    const lines = content.split('\n');
    const participants = new Set<string>();
    const waRegex = /^\[?(\d{1,2}\/\d{1,2}\/\d{2,4}),\s(\d{1,2}:\d{2}(?::\d{2})?(?:\s?[AP]M)?)\]?\s(?:-\s)?([^:]+):\s(.+)$/i;

    for (const line of lines) {
      const match = line.trim().match(waRegex);
      if (match) {
        const rawSenderName = match[3];
        const senderName = rawSenderName.replace(/[~\u200e\u200f]/g, '').trim();
        if (senderName && !senderName.includes('end-to-end encrypted')) {
          participants.add(senderName);
        }
      }
    }
    return Array.from(participants);
  }

  /**
   * Parse WhatsApp .txt export file with explicit current user selection
   */
  static async parseWhatsAppImport(
    content: string,
    selectedCurrentUserName: string,
    conversationId: string,
    currentUserId: string,
    recipientId: string,
    currentUserName: string,
    recipientName: string,
    recipientPublicKey: string,
    currentUserSecretKey: string
  ): Promise<Message[]> {
    const lines = content.split('\n');
    const messages: Message[] = [];
    const waRegex = /^\[?(\d{1,2}\/\d{1,2}\/\d{2,4}),\s(\d{1,2}:\d{2}(?::\d{2})?(?:\s?[AP]M)?)\]?\s(?:-\s)?([^:]+):\s(.+)$/i;

    let lastMessage: Message | null = null;

    for (const line of lines) {
      const trimmedLine = line.trim();
      if (!trimmedLine) continue;

      const match = trimmedLine.match(waRegex);
      if (match) {
        const [_, dateStr, timeStr, rawSenderName, messageContent] = match;
        const senderName = rawSenderName.replace(/[~\u200e\u200f]/g, '').trim();
        
        if (senderName.includes('end-to-end encrypted')) continue;

        const normalizedTime = timeStr.replace(/\u202f/g, ' ');
        const fullDateStr = `${dateStr} ${normalizedTime}`;
        const timestamp = new Date(fullDateStr).getTime() || Date.now();
        
        const isOwn = senderName === selectedCurrentUserName;
        const content = messageContent.trim();

        // Encrypt content for Firestore storage so the other user can decrypt it
        const encrypted = EncryptionService.encryptMessage(
          content,
          recipientPublicKey,
          currentUserSecretKey
        );
        
        const newMessage: Message = {
          messageId: `wa_${uuidv4()}`,
          conversationId,
          senderId: isOwn ? currentUserId : recipientId,
          senderName: isOwn ? currentUserName : recipientName,
          recipientId: isOwn ? recipientId : currentUserId,
          content: content,
          contentEncrypted: encrypted.ciphertext,
          nonce: encrypted.nonce,
          timestamp,
          isRead: true,
          type: 'text'
        };
        
        messages.push(newMessage);
        lastMessage = newMessage;
      } else if (lastMessage) {
        lastMessage.content += '\n' + trimmedLine;
        // Re-encrypt updated content
        const encrypted = EncryptionService.encryptMessage(
          lastMessage.content,
          recipientPublicKey,
          currentUserSecretKey
        );
        lastMessage.contentEncrypted = encrypted.ciphertext;
        lastMessage.nonce = encrypted.nonce;
      }
    }
    
    if (messages.length === 0) {
      throw new Error('No valid WhatsApp messages found in file.');
    }
    
    return messages;
  }
}
