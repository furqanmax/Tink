import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getMessaging, getToken, isSupported, Messaging } from 'firebase/messaging';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
let messaging: Messaging | null = null;
export const functions = getFunctions(app, 'us-central1');

// Enable persistence
setPersistence(auth, browserLocalPersistence).catch(console.error);

// Development: Use emulators
if (import.meta.env.DEV && import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true') {
  try {
    connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
    connectFirestoreEmulator(firestore, 'localhost', 8080);
    connectFunctionsEmulator(functions, 'localhost', 5001);
  } catch (e) {
    console.log('Firebase emulator already connected or not available');
  }
}

// Request FCM token for notifications
export async function getMessagingIfSupported(): Promise<Messaging | null> {
  if (messaging) return messaging;
  try {
    const supported = await isSupported();
    if (!supported) return null;
    messaging = getMessaging(app);
    return messaging;
  } catch (error) {
    console.warn('Firebase messaging not supported:', error);
    return null;
  }
}

export async function requestFCMToken(): Promise<string | null> {
  try {
    const messagingInstance = await getMessagingIfSupported();
    if (!messagingInstance) {
      console.warn('FCM not supported in this browser');
      return null;
    }

    const vapidKey = import.meta.env.VITE_FCM_VAPID_KEY;
    if (!vapidKey) {
      console.warn('FCM VAPID key not configured');
      return null;
    }

    let serviceWorkerRegistration: ServiceWorkerRegistration | undefined;
    if ('serviceWorker' in navigator) {
      serviceWorkerRegistration = await navigator.serviceWorker.register('/sw.js');
      await navigator.serviceWorker.ready;
      
      // Inject Firebase config into service worker for background message handling
      if (serviceWorkerRegistration.active) {
        serviceWorkerRegistration.active.postMessage({
          type: 'INIT_FIREBASE',
          config: firebaseConfig,
        });
      }
    }
    
    const token = await getToken(messagingInstance, {
      vapidKey,
      serviceWorkerRegistration,
    });
    
    if (token) {
      console.log('FCM Token:', token);
      return token;
    }
    return null;
  } catch (error) {
    console.error('Unable to get FCM token', error);
    return null;
  }
}
