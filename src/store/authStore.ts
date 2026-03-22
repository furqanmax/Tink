import { create } from 'zustand';
import { User as FirebaseUser } from 'firebase/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { auth, firestore } from '@/config/firebase';
import { User } from '@/types';
import { EncryptionService } from '@/services/encryption';
import { indexedDBService } from '@/services/indexeddb';

interface AuthUser extends FirebaseUser {
  displayName: string | null;
  photoURL: string | null;
}

interface AuthState {
  user: AuthUser | null;
  userProfile: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  initialized: boolean;
  
  signup: (email: string, password: string, displayName: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setUser: (user: AuthUser | null) => void;
  setUserProfile: (profile: User | null) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
  updateStatus: (status: 'online' | 'offline' | 'busy') => Promise<void>;
  updateFCMToken: (token: string) => Promise<void>;
}

async function ensureUserKeys(userId: string, userData?: User): Promise<{ publicKey: string; secretKey: string; updatedRemote: boolean }> {
  const localKeys = await indexedDBService.getUserKeys(userId);
  if (localKeys) {
    if (userData?.publicKey && userData.publicKey !== localKeys.publicKey) {
      if (userData.secretKey) {
        await indexedDBService.saveUserKeys(userId, userData.publicKey, userData.secretKey);
        return { publicKey: userData.publicKey, secretKey: userData.secretKey, updatedRemote: false };
      }
      return { ...localKeys, updatedRemote: true };
    }
    return { ...localKeys, updatedRemote: false };
  }

  if (userData?.publicKey && userData?.secretKey) {
    await indexedDBService.saveUserKeys(userId, userData.publicKey, userData.secretKey);
    return { publicKey: userData.publicKey, secretKey: userData.secretKey, updatedRemote: false };
  }

  const keyPair = EncryptionService.generateKeyPair();
  await indexedDBService.saveUserKeys(userId, keyPair.publicKey, keyPair.secretKey);
  return { ...keyPair, updatedRemote: true };
}

function sanitizeUserProfile(userData: User | undefined, publicKey: string): User | null {
  if (!userData) return null;
  const { secretKey, ...rest } = userData;
  return { ...rest, publicKey };
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  userProfile: null,
  loading: false,
  error: null,
  isAuthenticated: false,
  initialized: false,

  signup: async (email: string, password: string, displayName: string) => {
    set({ loading: true, error: null });
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      const keys = await EncryptionService.getOrCreateUserKeys(user.uid);
      
      const userData: Omit<User, 'uid'> = {
        email,
        displayName,
        photoURL: null,
        status: 'online',
        lastSeen: new Date(),
        createdAt: new Date(),
        isVerified: false,
        blockedUsers: [],
        friends: [],
        publicKey: keys.publicKey,
        settings: {
          privacyLevel: 'friends_only',
          notificationsEnabled: true,
        },
      };
      
      await setDoc(doc(firestore, 'users', user.uid), {
        ...userData,
        uid: user.uid,
        publicKey: keys.publicKey,
        secretKey: keys.secretKey,
        createdAt: serverTimestamp(),
        lastSeen: serverTimestamp(),
      });
      
      const authUser = { ...user, displayName, photoURL: null } as AuthUser;
      set({ 
        user: authUser, 
        userProfile: { ...userData, uid: user.uid } as User,
        isAuthenticated: true 
      });
    } catch (error) {
      const errorMessage = (error as Error).message;
      set({ error: errorMessage });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  login: async (email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      
      const userDoc = await getDoc(doc(firestore, 'users', user.uid));
      const userData = userDoc.data() as User | undefined;

      const keys = await ensureUserKeys(user.uid, userData);
      const shouldSyncKeys = !userData?.publicKey || !userData?.secretKey || keys.updatedRemote;
      
      await updateDoc(doc(firestore, 'users', user.uid), {
        status: 'online',
        lastSeen: serverTimestamp(),
        publicKey: keys.publicKey,
        ...(shouldSyncKeys ? { secretKey: keys.secretKey } : {}),
      });
      
      const authUser = { 
        ...user, 
        displayName: userData?.displayName || user.displayName || user.email,
        photoURL: userData?.photoURL || user.photoURL
      } as AuthUser;
      
      set({ 
        user: authUser, 
        userProfile: sanitizeUserProfile(userData, keys.publicKey),
        isAuthenticated: true 
      });
    } catch (error) {
      const errorMessage = (error as Error).message;
      set({ error: errorMessage });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    set({ loading: true, error: null });
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        await updateDoc(doc(firestore, 'users', currentUser.uid), {
          status: 'offline',
          lastSeen: serverTimestamp(),
        });
      }
      await signOut(auth);
      set({ user: null, userProfile: null, isAuthenticated: false });
    } catch (error) {
      const errorMessage = (error as Error).message;
      set({ error: errorMessage });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  setUser: (user) => set({ user, isAuthenticated: !!user }),
  
  setUserProfile: (profile) => set({ userProfile: profile }),
  
  setError: (error) => set({ error }),
  
  clearError: () => set({ error: null }),
  
  updateProfile: async (data) => {
    const { user, userProfile } = get();
    if (!user || !userProfile) return;
    
    try {
      await updateDoc(doc(firestore, 'users', user.uid), data);
      set({ userProfile: { ...userProfile, ...data } });
    } catch (error) {
      console.error('Failed to update profile:', error);
      throw error;
    }
  },

  updateFCMToken: async (token: string) => {
    const { user } = get();
    if (!user) return;
    try {
      await updateDoc(doc(firestore, 'users', user.uid), {
        fcmToken: token,
      });
    } catch (error) {
      console.error('Failed to update FCM token:', error);
    }
  },

  updateStatus: async (status) => {
    const { user } = get();
    if (!user) return;

    try {
      await updateDoc(doc(firestore, 'users', user.uid), {
        status,
        lastSeen: serverTimestamp(),
      });
      set((state) => ({
        userProfile: state.userProfile ? { ...state.userProfile, status } : null
      }));
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  },
}));

// Initialize auth state listener
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userDoc = await getDoc(doc(firestore, 'users', user.uid));
    const userData = userDoc.data() as User | undefined;
    const keys = await ensureUserKeys(user.uid, userData);
    const shouldSyncKeys = !userData?.publicKey || !userData?.secretKey || keys.updatedRemote;

    if (shouldSyncKeys) {
      await updateDoc(doc(firestore, 'users', user.uid), {
        publicKey: keys.publicKey,
        secretKey: keys.secretKey,
        status: 'online',
        lastSeen: serverTimestamp(),
      });
    } else {
      await updateDoc(doc(firestore, 'users', user.uid), {
        status: 'online',
        lastSeen: serverTimestamp(),
      });
    }
    
    useAuthStore.setState({
      user: user as AuthUser,
      userProfile: sanitizeUserProfile(userData, keys.publicKey),
      isAuthenticated: true,
      initialized: true,
    });
  } else {
    useAuthStore.setState({
      user: null,
      userProfile: null,
      isAuthenticated: false,
      initialized: true,
    });
  }
});
