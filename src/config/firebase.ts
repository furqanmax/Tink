import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getMessaging, getToken } from 'firebase/messaging';
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
export const messaging = getMessaging(app);
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
export async function requestFCMToken(): Promise<string | null> {
  try {
    const vapidKey = import.meta.env.VITE_FCM_VAPID_KEY;
    if (!vapidKey) {
      console.warn('FCM VAPID key not configured');
      return null;
    }

    let serviceWorkerRegistration: ServiceWorkerRegistration | undefined;
    if ('serviceWorker' in navigator) {
      serviceWorkerRegistration = await navigator.serviceWorker.register('/sw.js');
    }
    
    const token = await getToken(messaging, {
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
