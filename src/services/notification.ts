import { messaging } from '@/config/firebase';
import { onMessage } from 'firebase/messaging';
import { requestFCMToken } from '@/config/firebase';
import { useCallStore } from '@/store/callStore';

export type NotificationType = 'call' | 'message' | 'request' | 'system';

export interface Notification {
  type: NotificationType;
  title: string;
  body: string;
  data?: Record<string, string>;
  icon?: string;
  badge?: string;
  tag?: string;
  requireInteraction?: boolean;
}

class NotificationService {
  private initialized = false;

  /**
   * Initialize notifications
   */
  async initialize(): Promise<void> {
    if (this.initialized) return;
    if (!('Notification' in window)) {
      console.warn('This browser does not support notifications');
      return;
    }

    try {
      // Request permission
      const permission = Notification.permission;
      
      if (permission === 'default') {
        const result = await Notification.requestPermission();
        if (result !== 'granted') {
          console.warn('Notification permission denied');
          return;
        }
      } else if (permission === 'denied') {
        console.warn('Notification permission previously denied');
        return;
      }

      // Get FCM token
      await requestFCMToken();

      // Handle foreground messages
      onMessage(messaging, (payload) => {
        this.handleForegroundMessage(payload);
      });

      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize notifications:', error);
    }
  }

  /**
   * Handle foreground messages
   */
  private handleForegroundMessage(payload: any): void {
    const notification = payload.notification;
    const data = payload.data || {};

    // Handle call notifications specially
    if (data.type === 'call') {
      const callStore = useCallStore.getState();
      callStore.handleIncomingCall({
        callId: data.callId,
        callerId: data.callerId,
        callerName: data.callerName,
      });
    }

    // Show local notification
    this.showNotification({
      type: data.type || 'system',
      title: notification?.title || 'New Notification',
      body: notification?.body || '',
      data: data,
    });

    // Play sound
    this.playSound(data.type || 'system');
  }

  /**
   * Show local notification
   */
  showNotification(notification: Notification): void {
    if (Notification.permission !== 'granted') {
      return;
    }

    const options: NotificationOptions = {
      body: notification.body,
      icon: notification.icon || '/icon-192x192.png',
      badge: notification.badge || '/icon-72x72.png',
      tag: notification.tag || notification.type,
      data: notification.data,
      requireInteraction: notification.type === 'call',
      actions: notification.type === 'call' ? [
        { action: 'accept', title: 'Accept' },
        { action: 'decline', title: 'Decline' }
      ] : undefined,
    };

    try {
      new Notification(notification.title, options);
    } catch (error) {
      console.error('Failed to show notification:', error);
    }
  }

  /**
   * Play notification sound
   */
  private playSound(type: NotificationType): void {
    // Map notification types to sound files
    const soundMap: Record<NotificationType, string> = {
      call: '/sounds/incoming-call.mp3',
      message: '/sounds/message.mp3',
      request: '/sounds/notification.mp3',
      system: '/sounds/notification.mp3',
    };

    const audio = new Audio(soundMap[type]);
    audio.volume = 0.5;
    audio.play().catch((e) => {
      // Autoplay might be blocked, ignore error
      console.log('Could not play notification sound:', e);
    });
  }

  /**
   * Send local notification for message
   */
  notifyMessage(senderName: string, messagePreview: string, data?: Record<string, string>): void {
    this.showNotification({
      type: 'message',
      title: `Message from ${senderName}`,
      body: messagePreview,
      data,
    });
  }

  /**
   * Send local notification for incoming call
   */
  notifyIncomingCall(callerName: string, data: Record<string, string>): void {
    this.showNotification({
      type: 'call',
      title: 'Incoming Call',
      body: `${callerName} is calling you`,
      data,
      requireInteraction: true,
    });
  }

  /**
   * Send local notification for friend request
   */
  notifyFriendRequest(requesterName: string, data?: Record<string, string>): void {
    this.showNotification({
      type: 'request',
      title: 'New Friend Request',
      body: `${requesterName} wants to connect with you`,
      data,
    });
  }
}

export const notificationService = new NotificationService();
