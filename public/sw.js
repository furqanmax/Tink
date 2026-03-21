importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

const CACHE_VERSION = import.meta.env.CACHE_VERSION;
const CACHE_NAME = `tink-${CACHE_VERSION}`;

// Assets to cache immediately on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.svg'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip Firebase API requests
  if (event.request.url.includes('firebase')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if found
      if (response) {
        return response;
      }

      // Otherwise fetch from network
      return fetch(event.request).then((response) => {
        // Don't cache non-successful responses
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }

        // Clone response for caching
        const responseToCache = response.clone();
        
        caches.open(CACHE_NAME).then((cache) => {
          // Only cache same-origin requests
          if (new URL(event.request.url).origin === self.location.origin) {
            cache.put(event.request, responseToCache);
          }
        });

        return response;
      }).catch(() => {
        // Return offline fallback if available
        return caches.match('/index.html');
      });
    })
  );
});

// Push notification event
self.addEventListener('push', (event) => {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch (e) {
    payload = { notification: { title: 'Tink', body: event.data?.text?.() || 'New notification' } };
  }

  const title = payload.notification?.title || 'Tink';
  const options = {
    body: payload.notification?.body || 'New notification',
    icon: '/icon.svg',
    badge: '/icon.svg',
    tag: payload.data?.tag || payload.data?.callId || payload.data?.messageId || payload.data?.requestId || payload.data?.type || 'default',
    data: payload.data || {},
    requireInteraction: payload.data?.type === 'call',
    renotify: payload.data?.type === 'call',
    actions: payload.data?.type === 'call' ? [
      { action: 'accept', title: 'Accept' },
      { action: 'decline', title: 'Decline' }
    ] : []
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const action = event.action;
  const data = event.notification.data || {};
  const targetPath = data.type === 'call'
    ? '/chat?tab=calls'
    : data.type === 'friend_request'
    ? '/chat?tab=requests'
    : '/chat';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
      // If app is already open, focus it and post message
      if (clients.length > 0) {
        const client = clients[0];
        client.focus();
        client.postMessage({
          type: 'NOTIFICATION_CLICK',
          action,
          data
        });
        return;
      }

      // Otherwise open new window
      return self.clients.openWindow(targetPath);
    })
  );
});

// Background sync for offline messages
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-messages') {
    event.waitUntil(
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ type: 'SYNC_MESSAGES' });
        });
      })
    );
  }
});

// Message handler from main thread
self.addEventListener('message', (event) => {
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Initialize Firebase Messaging for background notifications
// Firebase config is injected at runtime when the app registers the SW
let messagingInstance = null;

self.addEventListener('message', (event) => {
  if (event.data.type === 'INIT_FIREBASE' && event.data.config) {
    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(event.data.config);
      }
      messagingInstance = firebase.messaging();
      
      // Handle background messages from FCM
      messagingInstance.onBackgroundMessage((payload) => {
        const notification = payload.notification || {};
        const data = payload.data || {};
        const type = data.type || 'system';
        
        const title = notification.title || 'Tink';
        const options = {
          body: notification.body || 'New notification',
          icon: '/icon.svg',
          badge: '/icon.svg',
          tag: data.tag || data.messageId || data.callId || type,
          data: data,
          requireInteraction: type === 'call',
          renotify: type === 'call',
          actions: type === 'call' ? [
            { action: 'accept', title: 'Accept' },
            { action: 'decline', title: 'Decline' }
          ] : []
        }
        ;
        
        return self.registration.showNotification(title, options);
      });
    } catch (error) {
      console.warn('Failed to initialize Firebase in SW:', error);
    }
  }
});
