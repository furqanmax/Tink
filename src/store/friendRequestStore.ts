import { create } from 'zustand';
import { collection, query, where, onSnapshot, addDoc, doc, updateDoc, deleteDoc, getDocs, serverTimestamp, writeBatch, arrayUnion, setDoc, getDoc } from 'firebase/firestore';
import { firestore, auth } from '@/config/firebase';
import { FriendRequest, User } from '@/types';
import { notificationService } from '@/services/notification';

interface FriendRequestState {
  incomingRequests: FriendRequest[];
  outgoingRequests: FriendRequest[];
  loading: boolean;
  error: string | null;
  unsubscribers: Array<() => void>;
  
  // Actions
  sendFriendRequest: (recipientId: string, recipientName: string) => Promise<void>;
  acceptFriendRequest: (requestId: string) => Promise<void>;
  rejectFriendRequest: (requestId: string) => Promise<void>;
  cancelFriendRequest: (requestId: string) => Promise<void>;
  loadFriendRequests: () => void;
  cleanup: () => void;
}

export const useFriendRequestStore = create<FriendRequestState>((set, get) => ({
  incomingRequests: [],
  outgoingRequests: [],
  loading: false,
  error: null,
  unsubscribers: [],

  sendFriendRequest: async (recipientId: string, recipientName: string) => {
    const currentUser = auth.currentUser;
    if (!currentUser) throw new Error('Not authenticated');
    if (currentUser.uid === recipientId) throw new Error('Cannot add yourself');

    set({ loading: true, error: null });
    
    try {
      // Check if already friends
      const currentUserDoc = await getDoc(doc(firestore, 'users', currentUser.uid));
      const currentUserData = currentUserDoc.data() as User | undefined;
      
      if (currentUserData?.friends?.includes(recipientId)) {
        throw new Error('Already friends with this user');
      }

      // Check if request already exists
      const existingQuery = query(
        collection(firestore, 'friendRequests'),
        where('senderId', '==', currentUser.uid),
        where('recipientId', '==', recipientId),
        where('status', '==', 'pending')
      );
      
      const existing = await getDocs(existingQuery);
      if (!existing.empty) {
        throw new Error('Friend request already sent');
      }

      // Create friend request
      await addDoc(collection(firestore, 'friendRequests'), {
        senderId: currentUser.uid,
        senderName: currentUser.displayName || currentUser.email,
        recipientId,
        recipientName,
        status: 'pending',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      // Send notification to recipient
      notificationService.notifyFriendRequest(
        currentUser.displayName || 'Someone',
        { senderId: currentUser.uid, type: 'friend_request' }
      );

    } catch (error) {
      console.error('Failed to send friend request:', error);
      set({ error: (error as Error).message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  acceptFriendRequest: async (requestId: string) => {
    const currentUser = auth.currentUser;
    if (!currentUser) throw new Error('Not authenticated');

    set({ loading: true, error: null });
    
    try {
      const requestRef = doc(firestore, 'friendRequests', requestId);
      
      // Get request data
      const requestSnap = await getDoc(requestRef);
      if (!requestSnap.exists()) throw new Error('Request not found');
      const requestData = requestSnap.data() as FriendRequest;
      const senderId = requestData.senderId;
      const recipientId = requestData.recipientId;

      // Use batch write for atomic operation
      const batch = writeBatch(firestore);
      
      // Update request status
      batch.update(requestRef, {
        status: 'accepted',
        updatedAt: serverTimestamp(),
      });

      // Add to sender's friends list
      const senderRef = doc(firestore, 'users', senderId);
      batch.update(senderRef, {
        friends: arrayUnion(recipientId),
      });

      // Add to recipient's friends list
      const recipientRef = doc(firestore, 'users', recipientId);
      batch.update(recipientRef, {
        friends: arrayUnion(senderId),
      });

      await batch.commit();

      // Create conversation for the new friends
      const conversationId = [senderId, recipientId].sort().join('_');
      await setDoc(doc(firestore, 'conversations', conversationId), {
        participants: [senderId, recipientId],
        participantNames: [requestData.senderName, requestData.recipientName],
        lastMessage: '',
        lastMessageTime: serverTimestamp(),
        createdAt: serverTimestamp(),
      });

    } catch (error) {
      console.error('Failed to accept friend request:', error);
      set({ error: (error as Error).message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  rejectFriendRequest: async (requestId: string) => {
    set({ loading: true, error: null });
    
    try {
      const requestRef = doc(firestore, 'friendRequests', requestId);
      await updateDoc(requestRef, {
        status: 'denied',
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error('Failed to reject friend request:', error);
      set({ error: (error as Error).message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  cancelFriendRequest: async (requestId: string) => {
    set({ loading: true, error: null });
    
    try {
      await deleteDoc(doc(firestore, 'friendRequests', requestId));
    } catch (error) {
      console.error('Failed to cancel friend request:', error);
      set({ error: (error as Error).message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  loadFriendRequests: () => {
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    // Subscribe to incoming requests
    const incomingQuery = query(
      collection(firestore, 'friendRequests'),
      where('recipientId', '==', currentUser.uid),
      where('status', '==', 'pending')
    );

    const unsubscribeIncoming = onSnapshot(incomingQuery, (snapshot) => {
      const requests = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      } as FriendRequest));
      set({ incomingRequests: requests });
    }, (error) => {
      console.error('Incoming requests subscription error:', error);
    });

    // Subscribe to outgoing requests
    const outgoingQuery = query(
      collection(firestore, 'friendRequests'),
      where('senderId', '==', currentUser.uid),
      where('status', '==', 'pending')
    );

    const unsubscribeOutgoing = onSnapshot(outgoingQuery, (snapshot) => {
      const requests = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      } as FriendRequest));
      set({ outgoingRequests: requests });
    }, (error) => {
      console.error('Outgoing requests subscription error:', error);
    });

    // Store unsubscribers
    set({ unsubscribers: [unsubscribeIncoming, unsubscribeOutgoing] });
  },

  cleanup: () => {
    const { unsubscribers } = get();
    if (unsubscribers) {
      unsubscribers.forEach((unsub: any) => unsub());
    }
    set({ incomingRequests: [], outgoingRequests: [] });
  },
}));
