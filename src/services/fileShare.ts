import { Room, RoomEvent, DataPacket_Kind } from 'livekit-client';
import { httpsCallable } from 'firebase/functions';
import { functions } from '@/config/firebase';
import { indexedDBService } from '@/services/indexeddb';
import { EncryptionService } from '@/services/encryption';

const CHUNK_SIZE = 32 * 1024;
const MAX_FILE_SIZE = 30 * 1024 * 1024;

type PendingFile = {
  fileId: string;
  conversationId: string;
  recipientId: string;
  senderId: string;
  senderName: string;
  name: string;
  type: string;
  size: number;
  hash: string;
  file: Blob;
  createdAt: number;
};

type IncomingFile = {
  meta: {
    fileId: string;
    name: string;
    type: string;
    size: number;
    hash: string;
    senderId: string;
    senderName: string;
    totalChunks: number;
  };
  chunks: string[];
  received: number;
};

type FileShareCallbacks = {
  onProgress?: (fileId: string, percentage: number) => void;
  onReceived?: (file: File, meta: IncomingFile['meta']) => void;
  onError?: (error: Error) => void;
  onPeerAvailable?: () => void;
};

class FileShareService {
  private rooms = new Map<string, Room>();
  private callbacks = new Map<string, FileShareCallbacks>();
  private incoming = new Map<string, IncomingFile>();

  validateFile(file: File): { valid: boolean; error?: string } {
    if (file.size > MAX_FILE_SIZE) {
      return {
        valid: false,
        error: `File size exceeds 30MB limit (${(file.size / 1024 / 1024).toFixed(2)}MB)`,
      };
    }
    return { valid: true };
  }

  async connect(conversationId: string, userName: string, callbacks?: FileShareCallbacks): Promise<void> {
    if (this.rooms.has(conversationId)) {
      if (callbacks) this.callbacks.set(conversationId, callbacks);
      return;
    }

    const room = new Room();
    const roomName = `files_${conversationId}`;
    const generateToken = httpsCallable(functions, 'generateLiveKitToken');
    const response = await generateToken({ roomName, userName });
    const token = (response.data as { token: string }).token;

    await room.connect(
      import.meta.env.VITE_LIVEKIT_URL || 'ws://localhost:7880',
      token,
      { autoSubscribe: true }
    );

    this.rooms.set(conversationId, room);
    if (callbacks) this.callbacks.set(conversationId, callbacks);

    room.on(RoomEvent.ParticipantConnected, () => {
      this.callbacks.get(conversationId)?.onPeerAvailable?.();
    });

    room.on(RoomEvent.DataReceived, async (payload) => {
      await this.handleIncomingData(conversationId, payload);
    });
  }

  async disconnect(conversationId: string): Promise<void> {
    const room = this.rooms.get(conversationId);
    if (room) {
      await room.disconnect();
    }
    this.rooms.delete(conversationId);
    this.callbacks.delete(conversationId);
  }

  isPeerAvailable(conversationId: string): boolean {
    const room = this.rooms.get(conversationId);
    return !!room && room.participants.size > 0;
  }

  async sendOrQueueFile(payload: PendingFile): Promise<void> {
    const { conversationId } = payload;
    if (!this.rooms.has(conversationId) || !this.isPeerAvailable(conversationId)) {
      await indexedDBService.savePendingFile(payload);
      return;
    }

    await this.sendFileNow(payload);
  }

  async flushPending(conversationId: string): Promise<void> {
    const pending = await indexedDBService.getPendingFiles(conversationId);
    if (!pending.length || !this.isPeerAvailable(conversationId)) return;

    for (const item of pending) {
      await this.sendFileNow(item);
      await indexedDBService.deletePendingFile(item.fileId);
    }
  }

  private async sendFileNow(payload: PendingFile): Promise<void> {
    const room = this.rooms.get(payload.conversationId);
    if (!room) return;

    const arrayBuffer = await payload.file.arrayBuffer();
    const totalChunks = Math.ceil(arrayBuffer.byteLength / CHUNK_SIZE);
    const metadata = {
      t: 'meta',
      fileId: payload.fileId,
      name: payload.name,
      type: payload.type,
      size: payload.size,
      hash: payload.hash,
      senderId: payload.senderId,
      senderName: payload.senderName,
      totalChunks,
    };

    room.localParticipant.publishData(
      new TextEncoder().encode(JSON.stringify(metadata)),
      DataPacket_Kind.RELIABLE
    );

    let offset = 0;
    let index = 0;
    while (offset < arrayBuffer.byteLength) {
      const chunk = arrayBuffer.slice(offset, offset + CHUNK_SIZE);
      const base64 = this.arrayBufferToBase64(chunk);
      const chunkMessage = {
        t: 'chunk',
        fileId: payload.fileId,
        index,
        data: base64,
      };

      room.localParticipant.publishData(
        new TextEncoder().encode(JSON.stringify(chunkMessage)),
        DataPacket_Kind.RELIABLE
      );

      offset += CHUNK_SIZE;
      index += 1;
      const percentage = Math.min(100, (index / totalChunks) * 100);
      this.callbacks.get(payload.conversationId)?.onProgress?.(payload.fileId, percentage);
      await new Promise((resolve) => setTimeout(resolve, 2));
    }

    const doneMessage = { t: 'done', fileId: payload.fileId };
    room.localParticipant.publishData(
      new TextEncoder().encode(JSON.stringify(doneMessage)),
      DataPacket_Kind.RELIABLE
    );
  }

  private async handleIncomingData(conversationId: string, payload: Uint8Array): Promise<void> {
    let message: any;
    try {
      message = JSON.parse(new TextDecoder().decode(payload));
    } catch (error) {
      return;
    }

    if (message.t === 'meta') {
      this.incoming.set(message.fileId, {
        meta: {
          fileId: message.fileId,
          name: message.name,
          type: message.type,
          size: message.size,
          hash: message.hash,
          senderId: message.senderId,
          senderName: message.senderName,
          totalChunks: message.totalChunks,
        },
        chunks: new Array(message.totalChunks),
        received: 0,
      });
      return;
    }

    if (message.t === 'chunk') {
      const item = this.incoming.get(message.fileId);
      if (!item) return;
      if (!item.chunks[message.index]) {
        item.chunks[message.index] = message.data;
        item.received += 1;
      }

      const progress = Math.min(100, (item.received / item.meta.totalChunks) * 100);
      this.callbacks.get(conversationId)?.onProgress?.(message.fileId, progress);
      return;
    }

    if (message.t === 'done') {
      const item = this.incoming.get(message.fileId);
      if (!item) return;

      try {
        const buffer = this.base64ChunksToArrayBuffer(item.chunks);
        const file = new File([buffer], item.meta.name, { type: item.meta.type });
        const hash = await EncryptionService.hashData(await file.arrayBuffer());
        if (hash !== item.meta.hash) {
          throw new Error('File integrity check failed');
        }

        await indexedDBService.saveFile({
          fileId: item.meta.fileId,
          conversationId,
          name: item.meta.name,
          type: item.meta.type,
          size: item.meta.size,
          hash: item.meta.hash,
          file,
          createdAt: Date.now(),
        });

        this.callbacks.get(conversationId)?.onReceived?.(file, item.meta);
        this.incoming.delete(message.fileId);
      } catch (error) {
        this.callbacks.get(conversationId)?.onError?.(error as Error);
      }
    }
  }

  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.length; i += 1) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  private base64ChunksToArrayBuffer(chunks: string[]): ArrayBuffer {
    const byteArrays = chunks.map((chunk) => {
      const binary = atob(chunk);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i += 1) {
        bytes[i] = binary.charCodeAt(i);
      }
      return bytes;
    });

    const totalLength = byteArrays.reduce((sum, arr) => sum + arr.length, 0);
    const buffer = new Uint8Array(totalLength);
    let offset = 0;
    for (const arr of byteArrays) {
      buffer.set(arr, offset);
      offset += arr.length;
    }
    return buffer.buffer;
  }
}

export const fileShareService = new FileShareService();
