export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  status: 'online' | 'offline' | 'busy';
  lastSeen: Date;
  createdAt: Date;
  isVerified: boolean;
  blockedUsers: string[];
  friends: string[];
  role?: 'admin' | 'user' | string;
  publicKey?: string;
  secretKey?: string;
  settings: {
    privacyLevel: 'public' | 'friends_only';
    notificationsEnabled: boolean;
  };
}

export interface Message {
  messageId: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  recipientId: string;
  content: string;
  contentEncrypted?: string;
  nonce?: string;
  timestamp: number;
  isRead: boolean;
  isEdited?: boolean;
  type: 'text' | 'file' | 'system';
  replyTo?: {
    messageId: string;
    senderId: string;
    senderName: string;
    content: string;
    type: 'text' | 'file' | 'system';
  };
  forwardedFrom?: string;
  fileData?: {
    name: string;
    size: number;
    hash: string;
    fileId?: string;
    mimeType?: string;
    downloadUrl?: string;
  };
}

export interface Conversation {
  conversationId: string;
  participants: string[];
  participantNames: string[];
  lastMessage: string;
  lastMessageTime: number;
  createdAt: number;
}

export interface FriendRequest {
  id: string;
  senderId: string;
  senderName: string;
  recipientId: string;
  recipientName?: string;
  status: 'pending' | 'accepted' | 'denied';
  createdAt: number;
  updatedAt: number;
}

export interface CallInfo {
  callId: string;
  remoteUserId: string;
  remoteUserName: string;
  startTime: number;
  endTime?: number;
  duration: number;
  state: 'idle' | 'ringing' | 'connecting' | 'connected' | 'ended';
}

export type CallState = 'idle' | 'ringing' | 'connecting' | 'connected' | 'ended';

export interface AdminSettings {
  maxFileSize: number;
  maxCallDuration: number;
  maxConcurrentCalls: number;
  videoQuality: 'LOW' | 'MEDIUM' | 'HIGH';
  audioCodec: string;
  videoCodec: string;
  enableRecording: boolean;
  turnServers: string[];
  blockedUsers?: string[];
}
