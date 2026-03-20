import { beforeEach, describe, expect, it, vi } from 'vitest';

const hoisted = vi.hoisted(() => {
  const handleIncomingCall = vi.fn();
  const rejectIncomingCall = vi.fn();
  const getMessagingIfSupported = vi.fn();
  const requestFCMToken = vi.fn();
  const onMessage = vi.fn();
  const updateDoc = vi.fn();
  const doc = vi.fn((...args: any[]) => ({ args }));
  const mockServiceWorkerListener = vi.fn();
  return {
    handleIncomingCall,
    rejectIncomingCall,
    getMessagingIfSupported,
    requestFCMToken,
    onMessage,
    updateDoc,
    doc,
    mockServiceWorkerListener,
    getState: vi.fn(() => ({
      handleIncomingCall,
      incomingCallData: null,
      rejectIncomingCall,
    })),
  };
});

vi.mock('@/config/firebase', () => ({
  auth: { currentUser: { uid: 'user-1' } },
  firestore: { _mock: true },
  getMessagingIfSupported: hoisted.getMessagingIfSupported,
  requestFCMToken: hoisted.requestFCMToken,
}));

vi.mock('firebase/messaging', () => ({
  onMessage: hoisted.onMessage,
}));

vi.mock('firebase/firestore', () => ({
  doc: hoisted.doc,
  updateDoc: hoisted.updateDoc,
  serverTimestamp: vi.fn(() => ({ __serverTimestamp: true })),
}));

vi.mock('@/store/callStore', () => ({
  useCallStore: {
    getState: hoisted.getState,
  },
}));

import { notificationService } from '@/services/notification';

describe('notificationService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (notificationService as any).initialized = false;
    (notificationService as any).boundServiceWorkerListener = false;
    (notificationService as any).webPushRegistered = false;
    (notificationService as any).seenNotificationKeys.clear();

    Object.defineProperty(window, 'Notification', {
      configurable: true,
      writable: true,
      value: class MockNotification {
        static permission: NotificationPermission = 'granted';
        static requestPermission = vi.fn(async () => 'granted' as NotificationPermission);
        constructor() {}
      },
    });

    const pushManager = {
      getSubscription: vi.fn().mockResolvedValue(null),
      subscribe: vi.fn().mockResolvedValue({
        toJSON: () => ({
          endpoint: 'https://push.example/sub-1',
          expirationTime: null,
          keys: {
            auth: 'auth-key',
            p256dh: 'p256dh-key',
          },
        }),
      }),
    };

    Object.defineProperty(window, 'PushManager', {
      configurable: true,
      writable: true,
      value: function PushManager() {},
    });

    Object.defineProperty(window, 'navigator', {
      configurable: true,
      value: {
        ...window.navigator,
        userAgent: 'test-agent',
        serviceWorker: {
          addEventListener: hoisted.mockServiceWorkerListener,
          ready: Promise.resolve({ pushManager }),
        },
      },
    });
  });

  it('deduplicates repeated foreground message notifications', () => {
    const showSpy = vi.spyOn(notificationService, 'showNotification').mockImplementation(() => {});

    const payload = {
      notification: { title: 'Message from Alice', body: 'Hello' },
      data: {
        type: 'message',
        messageId: 'msg-1',
        senderId: 'alice',
      },
    };

    (notificationService as any).handleForegroundMessage(payload);
    (notificationService as any).handleForegroundMessage(payload);

    expect(showSpy).toHaveBeenCalledTimes(1);
  });

  it('normalizes friend request notification type', () => {
    const showSpy = vi.spyOn(notificationService, 'showNotification').mockImplementation(() => {});

    (notificationService as any).handleForegroundMessage({
      notification: { title: 'New Friend Request', body: 'Bob sent a request' },
      data: {
        type: 'friend_request',
        requestId: 'req-1',
      },
    });

    expect(showSpy).toHaveBeenCalledTimes(1);
    expect(showSpy).toHaveBeenCalledWith(expect.objectContaining({ type: 'request' }));
  });

  it('does not dispatch incoming call state when required call payload is incomplete', () => {
    const showSpy = vi.spyOn(notificationService, 'showNotification').mockImplementation(() => {});

    (notificationService as any).handleForegroundMessage({
      notification: { title: 'Incoming Call', body: 'Alice is calling' },
      data: {
        type: 'call',
        callId: 'call-1',
        callerId: 'alice',
      },
    });

    expect(hoisted.handleIncomingCall).not.toHaveBeenCalled();
    expect(showSpy).toHaveBeenCalledTimes(1);
  });

  it('dispatches incoming call state when call payload is complete', () => {
    const showSpy = vi.spyOn(notificationService, 'showNotification').mockImplementation(() => {});

    (notificationService as any).handleForegroundMessage({
      notification: { title: 'Incoming Call', body: 'Alice is calling' },
      data: {
        type: 'call',
        callId: 'call-2',
        callerId: 'alice',
        callerName: 'Alice',
        roomName: 'alice_user-1',
        isVideo: '1',
      },
    });

    expect(hoisted.handleIncomingCall).toHaveBeenCalledWith(
      expect.objectContaining({
        callId: 'call-2',
        callerId: 'alice',
        roomName: 'alice_user-1',
      })
    );
    expect(showSpy).toHaveBeenCalledTimes(1);
  });

  it('initializes foreground FCM listener and stores FCM token', async () => {
    const NotificationCtor = window.Notification as any;
    NotificationCtor.permission = 'granted';
    hoisted.getMessagingIfSupported.mockResolvedValue({ _messaging: true });
    hoisted.requestFCMToken.mockResolvedValue('fcm-token-1');

    await notificationService.initialize();

    expect(hoisted.requestFCMToken).toHaveBeenCalledTimes(1);
    expect(hoisted.onMessage).toHaveBeenCalledTimes(1);
    expect(hoisted.updateDoc).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        fcmToken: 'fcm-token-1',
      })
    );
  });

  it('registers web push subscription for browsers with PushManager support', async () => {
    const NotificationCtor = window.Notification as any;
    NotificationCtor.permission = 'granted';
    hoisted.getMessagingIfSupported.mockResolvedValue(null);
    hoisted.requestFCMToken.mockResolvedValue(null);

    await notificationService.initialize();

    const calls = hoisted.updateDoc.mock.calls.map((entry) => entry[1]);
    const webPushUpdate = calls.find((payload) =>
      Object.keys(payload || {}).some((key) => key.startsWith('webPushSubscriptions.'))
    );
    expect(webPushUpdate).toBeTruthy();
    expect(hoisted.mockServiceWorkerListener).toHaveBeenCalledWith('message', expect.any(Function));
  });

  it('skips initialization when notification permission is denied', async () => {
    const NotificationCtor = window.Notification as any;
    NotificationCtor.permission = 'denied';

    await notificationService.initialize();

    expect(hoisted.getMessagingIfSupported).not.toHaveBeenCalled();
    expect(hoisted.requestFCMToken).not.toHaveBeenCalled();
    expect(hoisted.onMessage).not.toHaveBeenCalled();
  });
});
