import { create } from 'zustand';
import { collection, query, where, onSnapshot, addDoc, doc, updateDoc, deleteDoc, getDocs, serverTimestamp, writeBatch, arrayUnion, arrayRemove, setDoc, getDoc } from 'firebase/firestore';
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
  unfriendUser: (targetUserId: string) => Promise<void>;
  blockUser: (targetUserId: string) => Promise<void>;
  loadFriendRequests: (userId?: string) => void;
  cleanup: () => void;
}

function toMillis(value: unknown): number {
  if (!value) return Date.now();
  if (typeof value === 'number') return value;
  if (value instanceof Date) return value.getTime();
  if (typeof value === 'object' && value !== null && 'toMillis' in value && typeof (value as any).toMillis === 'function') {
    return (value as any).toMillis();
  }
  return Date.now();
}

function mapRequestDoc(id: string, data: any): FriendRequest {
  return {
    id,
    senderId: data.senderId,
    senderName: data.senderName,
    recipientId: data.recipientId,
    recipientName: data.recipientName,
    status: data.status,
    createdAt: toMillis(data.createdAt),
    updatedAt: toMillis(data.updatedAt),
  };
}

function sortRequestsByCreatedAtDesc(requests: FriendRequest[]): FriendRequest[] {
  return [...requests].sort((a, b) => b.createdAt - a.createdAt);
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
      if (currentUserData?.blockedUsers?.includes(recipientId)) {
        throw new Error('Unblock this user before sending a friend request');
      }

      const recipientDoc = await getDoc(doc(firestore, 'users', recipientId));
      if (!recipientDoc.exists()) {
        throw new Error('User not found');
      }
      const recipientData = recipientDoc.data() as User;

      if (recipientData?.blockedUsers?.includes(currentUser.uid)) {
        throw new Error('Unable to send request to this user');
      }

      // Check if current user already sent a pending request
      const sentPendingQuery = query(
        collection(firestore, 'friendRequests'),
        where('senderId', '==', currentUser.uid),
        where('recipientId', '==', recipientId),
        where('status', '==', 'pending')
      );

      const sentPending = await getDocs(sentPendingQuery);
      if (!sentPending.empty) {
        throw new Error('Friend request already sent');
      }

      // Check if recipient already sent a pending request
      const receivedPendingQuery = query(
        collection(firestore, 'friendRequests'),
        where('senderId', '==', recipientId),
        where('recipientId', '==', currentUser.uid),
        where('status', '==', 'pending')
      );

      const receivedPending = await getDocs(receivedPendingQuery);
      if (!receivedPending.empty) {
        throw new Error('This user already sent you a request. Check Incoming requests.');
      }

      // Create friend request
      const createdRequest = {
        senderId: currentUser.uid,
        senderName: currentUser.displayName || currentUser.email || 'Unknown',
        recipientId,
        recipientName,
        status: 'pending',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      const requestRef = await addDoc(collection(firestore, 'friendRequests'), createdRequest);

      // Optimistically reflect the sent request in UI until snapshot arrives.
      set((state) => ({
        outgoingRequests: [
          {
            id: requestRef.id,
            senderId: currentUser.uid,
            senderName: currentUser.displayName || currentUser.email || 'Unknown',
            recipientId,
            recipientName,
            status: 'pending',
            createdAt: Date.now(),
            updatedAt: Date.now(),
          },
          ...state.outgoingRequests.filter((request) => request.id !== requestRef.id),
        ],
      }));

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

      if (requestData.status !== 'pending') {
        throw new Error('Request is no longer pending');
      }

      const senderId = requestData.senderId;
      const recipientId = requestData.recipientId;

      if (currentUser.uid !== recipientId) {
        throw new Error('Not authorized to accept this request');
      }

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
      }, { merge: true });

    } catch (error) {
      console.error('Failed to accept friend request:', error);
      set({ error: (error as Error).message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  rejectFriendRequest: async (requestId: string) => {
    const currentUser = auth.currentUser;
    if (!currentUser) throw new Error('Not authenticated');

    set({ loading: true, error: null });
    
    try {
      const requestRef = doc(firestore, 'friendRequests', requestId);
      const requestSnap = await getDoc(requestRef);
      if (!requestSnap.exists()) throw new Error('Request not found');

      const requestData = requestSnap.data() as FriendRequest;
      if (requestData.status !== 'pending') {
        throw new Error('Request is no longer pending');
      }
      if (requestData.recipientId !== currentUser.uid) {
        throw new Error('Not authorized to reject this request');
      }

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
    const currentUser = auth.currentUser;
    if (!currentUser) throw new Error('Not authenticated');

    set({ loading: true, error: null });
    
    try {
      const requestRef = doc(firestore, 'friendRequests', requestId);
      const requestSnap = await getDoc(requestRef);
      if (!requestSnap.exists()) return;

      const requestData = requestSnap.data() as FriendRequest;
      if (requestData.status !== 'pending') {
        throw new Error('Only pending requests can be canceled');
      }
      if (requestData.senderId !== currentUser.uid) {
        throw new Error('Not authorized to cancel this request');
      }

      await deleteDoc(requestRef);
    } catch (error) {
      console.error('Failed to cancel friend request:', error);
      set({ error: (error as Error).message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  unfriendUser: async (targetUserId: string) => {
    const currentUser = auth.currentUser;
    if (!currentUser) throw new Error('Not authenticated');
    if (currentUser.uid === targetUserId) throw new Error('Invalid user');

    set({ loading: true, error: null });

    try {
      const batch = writeBatch(firestore);
      const currentUserRef = doc(firestore, 'users', currentUser.uid);
      const targetUserRef = doc(firestore, 'users', targetUserId);
      const conversationRef = doc(firestore, 'conversations', [currentUser.uid, targetUserId].sort().join('_'));

      batch.update(currentUserRef, {
        friends: arrayRemove(targetUserId),
      });
      batch.update(targetUserRef, {
        friends: arrayRemove(currentUser.uid),
      });
      batch.delete(conversationRef);

      await batch.commit();
    } catch (error) {
      console.error('Failed to unfriend user:', error);
      set({ error: (error as Error).message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  blockUser: async (targetUserId: string) => {
    const currentUser = auth.currentUser;
    if (!currentUser) throw new Error('Not authenticated');
    if (currentUser.uid === targetUserId) throw new Error('Invalid user');

    set({ loading: true, error: null });

    try {
      const pendingSentQuery = query(
        collection(firestore, 'friendRequests'),
        where('senderId', '==', currentUser.uid),
        where('recipientId', '==', targetUserId),
        where('status', '==', 'pending')
      );
      const pendingReceivedQuery = query(
        collection(firestore, 'friendRequests'),
        where('senderId', '==', targetUserId),
        where('recipientId', '==', currentUser.uid),
        where('status', '==', 'pending')
      );

      const [pendingSent, pendingReceived] = await Promise.all([
        getDocs(pendingSentQuery),
        getDocs(pendingReceivedQuery),
      ]);

      const cleanupBatch = writeBatch(firestore);
      pendingSent.docs.forEach((requestDoc) => cleanupBatch.delete(requestDoc.ref));
      pendingReceived.docs.forEach((requestDoc) =>
        cleanupBatch.update(requestDoc.ref, {
          status: 'denied',
          updatedAt: serverTimestamp(),
        })
      );
      await cleanupBatch.commit();

      const relationshipBatch = writeBatch(firestore);
      const currentUserRef = doc(firestore, 'users', currentUser.uid);
      const targetUserRef = doc(firestore, 'users', targetUserId);
      const conversationRef = doc(firestore, 'conversations', [currentUser.uid, targetUserId].sort().join('_'));

      relationshipBatch.update(currentUserRef, {
        blockedUsers: arrayUnion(targetUserId),
        friends: arrayRemove(targetUserId),
      });
      relationshipBatch.update(targetUserRef, {
        friends: arrayRemove(currentUser.uid),
      });
      relationshipBatch.delete(conversationRef);

      await relationshipBatch.commit();

      set((state) => ({
        incomingRequests: state.incomingRequests.filter((request) => request.senderId !== targetUserId),
        outgoingRequests: state.outgoingRequests.filter((request) => request.recipientId !== targetUserId),
      }));
    } catch (error) {
      console.error('Failed to block user:', error);
      set({ error: (error as Error).message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  loadFriendRequests: (userId?: string) => {
    const currentUserId = userId ?? auth.currentUser?.uid;
    if (!currentUserId) return;

    // Prevent duplicate live subscriptions when this action is called repeatedly.
    const { unsubscribers } = get();
    unsubscribers.forEach((unsubscribe) => unsubscribe());

    // Subscribe to incoming requests
    const incomingQuery = query(
      collection(firestore, 'friendRequests'),
      where('recipientId', '==', currentUserId)
    );

    const unsubscribeIncoming = onSnapshot(incomingQuery, (snapshot) => {
      const requests = snapshot.docs
        .map((requestDoc) => mapRequestDoc(requestDoc.id, requestDoc.data()))
        .filter((request) => request.status === 'pending');

      set({
        incomingRequests: sortRequestsByCreatedAtDesc(requests),
        error: null,
      });
    }, (error) => {
      console.error('Incoming requests subscription error:', error);
      set({ error: (error as Error).message });
    });

    // Subscribe to outgoing requests
    const outgoingQuery = query(
      collection(firestore, 'friendRequests'),
      where('senderId', '==', currentUserId)
    );

    const unsubscribeOutgoing = onSnapshot(outgoingQuery, (snapshot) => {
      const requests = snapshot.docs
        .map((requestDoc) => mapRequestDoc(requestDoc.id, requestDoc.data()))
        .filter((request) => request.status === 'pending' || request.status === 'denied');

      set({
        outgoingRequests: sortRequestsByCreatedAtDesc(requests),
        error: null,
      });
    }, (error) => {
      console.error('Outgoing requests subscription error:', error);
      set({ error: (error as Error).message });
    });

    // Store unsubscribers
    set({ unsubscribers: [unsubscribeIncoming, unsubscribeOutgoing] });
  },

  cleanup: () => {
    const { unsubscribers } = get();
    if (unsubscribers) {
      unsubscribers.forEach((unsub: any) => unsub());
    }
    set({ incomingRequests: [], outgoingRequests: [], unsubscribers: [] });
  },
}));
