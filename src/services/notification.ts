import { auth, firestore, getMessagingIfSupported, requestFCMToken } from '@/config/firebase';
import { onMessage } from 'firebase/messaging';
import { useCallStore } from '@/store/callStore';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';

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
  private readonly dedupeTtlMs = 10_000;
  private readonly seenNotificationKeys = new Map<string, number>();
  private boundServiceWorkerListener = false;
  private webPushRegistered = false;

  private base64UrlToUint8Array(base64UrlString: string): Uint8Array {
    const padding = '='.repeat((4 - (base64UrlString.length % 4)) % 4);
    const normalized = (base64UrlString + padding).replace(/-/g, '+').replace(/_/g, '/');
    const decoded = window.atob(normalized);
    const bytes = new Uint8Array(decoded.length);
    for (let index = 0; index < decoded.length; index += 1) {
      bytes[index] = decoded.charCodeAt(index);
    }
    return bytes;
  }

  private async sha256Hex(input: string): Promise<string> {
    if (!window.crypto?.subtle) {
      return window.btoa(input).replace(/[^a-zA-Z0-9]/g, '').slice(0, 32);
    }
    const encoded = new TextEncoder().encode(input);
    const digest = await window.crypto.subtle.digest('SHA-256', encoded);
    return Array.from(new Uint8Array(digest))
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
  }

  private async registerWebPushSubscription(): Promise<void> {
    if (this.webPushRegistered || !auth.currentUser) return;
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) return;

    const vapidKey = import.meta.env.VITE_FCM_VAPID_KEY as string | undefined;
    if (!vapidKey) {
      console.warn('Web push VAPID key not configured');
      return;
    }

    try {
      const registration = await navigator.serviceWorker.ready;
      let subscription = await registration.pushManager.getSubscription();
      if (!subscription) {
        subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: this.base64UrlToUint8Array(vapidKey) as BufferSource,
        });
      }

      const serialized = subscription.toJSON();
      if (!serialized.endpoint || !serialized.keys?.auth || !serialized.keys?.p256dh) {
        return;
      }

      const subscriptionId = await this.sha256Hex(serialized.endpoint);
      await updateDoc(doc(firestore, 'users', auth.currentUser.uid), {
        [`webPushSubscriptions.${subscriptionId}`]: {
          endpoint: serialized.endpoint,
          keys: serialized.keys,
          expirationTime: serialized.expirationTime ?? null,
          subscriptionId,
          userAgent: navigator.userAgent,
          updatedAt: Date.now(),
        },
        webPushUpdatedAt: serverTimestamp(),
      });

      this.webPushRegistered = true;
    } catch (error) {
      console.warn('Unable to register Web Push subscription:', error);
    }
  }

  private normalizeType(type?: string): NotificationType {
    if (type === 'call') return 'call';
    if (type === 'message') return 'message';
    if (type === 'friend_request' || type === 'request' || type === 'invite') return 'request';
    return 'system';
  }

  private getNotificationKey(data: Record<string, string>, type: NotificationType): string {
    return data.callId || data.messageId || data.requestId || data.tag || `${type}:${data.senderId || ''}:${data.conversationId || ''}`;
  }

  private shouldSkipDuplicate(key: string): boolean {
    if (!key) return false;
    const now = Date.now();
    for (const [storedKey, timestamp] of this.seenNotificationKeys.entries()) {
      if (now - timestamp > this.dedupeTtlMs) {
        this.seenNotificationKeys.delete(storedKey);
      }
    }
    if (this.seenNotificationKeys.has(key)) return true;
    this.seenNotificationKeys.set(key, now);
    return false;
  }

  private bindServiceWorkerMessages(): void {
    if (this.boundServiceWorkerListener || !('serviceWorker' in navigator)) return;
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data?.type !== 'NOTIFICATION_CLICK') return;
      const data = event.data?.data || {};
      const type = this.normalizeType(data.type);
      if (type === 'call') {
        const callStore = useCallStore.getState();
        if (event.data?.action === 'decline' && callStore.incomingCallData?.callId === data.callId) {
          void callStore.rejectIncomingCall();
        }
      }
      window.focus();
      if (window.location.pathname !== '/chat') {
        window.location.href = '/chat';
      }
    });
    this.boundServiceWorkerListener = true;
  }

  /**
   * Initialize notifications
   */
  async initialize(): Promise<void> {
    if (this.initialized) return;
    if (typeof window === 'undefined' || !('Notification' in window)) {
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

      const messaging = await getMessagingIfSupported();
      if (messaging) {
        const token = await requestFCMToken();
        if (token && auth.currentUser) {
          await updateDoc(doc(firestore, 'users', auth.currentUser.uid), {
            fcmToken: token,
            fcmUpdatedAt: serverTimestamp(),
          });
        }

        // Handle foreground messages
        onMessage(messaging, (payload) => {
          this.handleForegroundMessage(payload);
        });
      }

      await this.registerWebPushSubscription();
      this.bindServiceWorkerMessages();

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
    const data = (payload.data || {}) as Record<string, string>;
    const type = this.normalizeType(data.type);
    const dedupeKey = this.getNotificationKey(data, type);
    if (this.shouldSkipDuplicate(dedupeKey)) {
      return;
    }

    // Handle call notifications specially
    if (type === 'call' && data.callId && data.callerId && data.roomName) {
      const callStore = useCallStore.getState();
      void callStore.handleIncomingCall({
        callId: data.callId,
        callerId: data.callerId,
        callerName: data.callerName || 'Unknown',
        roomName: data.roomName,
        isVideo: data.isVideo !== '0',
      });
    }

    // Show local notification
    this.showNotification({
      type,
      title: notification?.title || 'New Notification',
      body: notification?.body || '',
      data: data,
      tag: data.tag || dedupeKey,
    });

    // Play sound
    this.playSound(type);
  }

  /**
   * Show local notification
   */
  showNotification(notification: Notification): void {
    if (Notification.permission !== 'granted') {
      return;
    }

    const options: NotificationOptions & { actions?: Array<{ action: string; title: string }> } = {
      body: notification.body,
      icon: notification.icon || '/icon.svg',
      badge: notification.badge || '/icon.svg',
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
    const contextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!contextClass) return;
    try {
      const context = new contextClass();
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.value = type === 'call' ? 720 : 520;
      gain.gain.value = type === 'call' ? 0.05 : 0.03;

      oscillator.connect(gain);
      gain.connect(context.destination);

      oscillator.start();
      oscillator.stop(context.currentTime + (type === 'call' ? 0.35 : 0.12));
      oscillator.onended = () => {
        context.close().catch(() => {});
      };
    } catch (error) {
      // Ignore sound failures. Tray notification is primary signal.
      console.debug('Notification sound unavailable:', error);
    }
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
