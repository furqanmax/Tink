const CACHE_VERSION = 'v1';
const CACHE_NAME = `video-chat-${CACHE_VERSION}`;

// Assets to cache immediately on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192x192.png',
  '/icon-512x512.png'
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
  const data = event.data?.json() ?? {};
  const title = data.notification?.title || 'Video Chat';
  const options = {
    body: data.notification?.body || 'New notification',
    icon: '/icon-192x192.png',
    badge: '/icon-72x72.png',
    tag: data.data?.type || 'default',
    data: data.data || {},
    requireInteraction: data.data?.type === 'call',
    actions: data.data?.type === 'call' ? [
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
  const data = event.notification.data;

  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((clients) => {
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
      return self.clients.openWindow('/chat');
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
