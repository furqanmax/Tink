import { create } from 'zustand';
import { Room, RemoteParticipant, LocalTrack, RemoteTrack } from 'livekit-client';
import { httpsCallable } from 'firebase/functions';
import { addDoc, collection, doc, getDoc, onSnapshot, query, serverTimestamp, updateDoc, where, type Unsubscribe } from 'firebase/firestore';
import { liveKitService } from '@/services/livekit';
import { jitsiService } from '@/services/jitsi';
import { CallInfo, CallState } from '@/types';
import { auth, firestore, functions } from '@/config/firebase';

const CALL_TIMEOUT_MS = 30_000;
const CALL_PROVIDER = (import.meta.env.VITE_CALL_PROVIDER || 'livekit').toLowerCase();
const IS_JITSI_PROVIDER = CALL_PROVIDER === 'jitsi';

type CallSessionStatus = 'ringing' | 'accepted' | 'rejected' | 'canceled' | 'ended' | 'missed' | 'busy';

interface IncomingCallData {
  callId: string;
  callerId: string;
  callerName: string;
  roomName: string;
  isVideo: boolean;
}

interface CallStore {
  currentCall: CallInfo | null;
  room: Room | null;
  remoteParticipants: RemoteParticipant[];
  localTracks: {
    video?: LocalTrack;
    audio?: LocalTrack;
  };
  remoteTracks: {
    video?: RemoteTrack;
    audio?: RemoteTrack;
  };
  callState: CallState;
  audioEnabled: boolean;
  videoEnabled: boolean;
  audioProcessingEnabled: boolean;
  error: string | null;
  isIncomingCall: boolean;
  incomingCallData: IncomingCallData | null;
  activeCallId: string | null;
  activeRoomName: string | null;
  incomingCallUnsubscribe: Unsubscribe | null;
  activeCallUnsubscribe: Unsubscribe | null;

  initiateCall: (remoteUserId: string, remoteUserName: string, isVideo?: boolean) => Promise<void>;
  acceptIncomingCall: () => Promise<void>;
  rejectIncomingCall: () => Promise<void>;
  endCall: () => Promise<void>;
  toggleAudio: () => Promise<void>;
  toggleVideo: () => Promise<void>;
  toggleAudioProcessing: () => Promise<void>;
  handleIncomingCall: (data: IncomingCallData) => Promise<void>;
  initializeIncomingCallListener: () => void;
  cleanup: () => void;
  clearError: () => void;
}

function toMillis(value: unknown): number {
  if (!value) return 0;
  if (typeof value === 'number') return value;
  if (value instanceof Date) return value.getTime();
  if (typeof value === 'object' && value !== null && 'toMillis' in value && typeof (value as any).toMillis === 'function') {
    return (value as any).toMillis();
  }
  return 0;
}

function resetCallState(set: (state: Partial<CallStore>) => void) {
  set({
    currentCall: null,
    room: null,
    remoteParticipants: [],
    localTracks: {},
    remoteTracks: {},
    callState: 'idle',
    isIncomingCall: false,
    incomingCallData: null,
    activeCallId: null,
    activeRoomName: null,
  });
}

async function notifyIncomingCallFallback(
  recipientId: string,
  callData: { callId: string; callerId: string; callerName: string; roomName: string; isVideo: boolean }
) {
  try {
    const sendNotification = httpsCallable(functions, 'sendNotification');
    await sendNotification({
      recipientId,
      title: 'Incoming Call',
      body: `${callData.callerName} is calling you`,
      type: 'call',
      data: {
        ...callData,
        isVideo: callData.isVideo ? '1' : '0',
      },
    });
  } catch (error) {
    // Realtime listener is the primary mechanism. FCM is best-effort fallback.
    console.warn('Call push notification fallback failed:', error);
  }
}

export const useCallStore = create<CallStore>((set, get) => {
  const clearActiveCallSubscription = () => {
    const activeCallUnsubscribe = get().activeCallUnsubscribe;
    if (activeCallUnsubscribe) {
      activeCallUnsubscribe();
    }
    set({ activeCallUnsubscribe: null });
  };

  const watchCallSession = (callId: string) => {
    clearActiveCallSubscription();

    const unsubscribe = onSnapshot(doc(firestore, 'callSessions', callId), async (snapshot) => {
      if (!snapshot.exists()) {
        clearActiveCallSubscription();
        return;
      }

      const data = snapshot.data();
      const status = data.status as CallSessionStatus;
      const currentUserId = auth.currentUser?.uid;
      const isCaller = currentUserId && data.callerId === currentUserId;

      if (status === 'accepted') {
        if (get().callState === 'connected') return;
        try {
          if (IS_JITSI_PROVIDER) {
            set({
              room: null,
              callState: 'connected',
              isIncomingCall: false,
              incomingCallData: null,
              activeRoomName: data.roomName,
              currentCall: get().currentCall
                ? {
                    ...get().currentCall!,
                    state: 'connected',
                    startTime: Date.now(),
                  }
                : null,
            });
          } else {
            const room = await liveKitService.connectToRoom(data.roomName, auth.currentUser?.displayName || auth.currentUser?.email || 'User', {
              audio: true,
              video: data.isVideo !== false,
            });

            if (get().audioProcessingEnabled) {
              await liveKitService.enableAudioProcessing();
            }

            set({
              room,
              remoteParticipants: Array.from(room.participants.values()),
              callState: 'connected',
              isIncomingCall: false,
              incomingCallData: null,
              activeRoomName: data.roomName,
              currentCall: get().currentCall
                ? {
                    ...get().currentCall!,
                    state: 'connected',
                    startTime: Date.now(),
                  }
                : null,
            });

            liveKitService.onParticipantConnected((participant) => {
              set((state) => ({
                remoteParticipants: [...state.remoteParticipants, participant],
              }));
            });

            liveKitService.onParticipantDisconnected((participant) => {
              set((state) => ({
                remoteParticipants: state.remoteParticipants.filter((p) => p.identity !== participant.identity),
              }));
            });

            liveKitService.onConnectionStateChanged((state) => {
              if (state === 'reconnecting') {
                set({ callState: 'connecting' });
              } else if (state === 'connected') {
                set({ callState: 'connected' });
              }
            });

            liveKitService.onDisconnected(async () => {
              if (get().activeCallId) {
                const activeRef = doc(firestore, 'callSessions', get().activeCallId!);
                const activeSnap = await getDoc(activeRef);
                const activeStatus = activeSnap.data()?.status as CallSessionStatus | undefined;
                if (activeSnap.exists() && (activeStatus === 'accepted' || activeStatus === 'ringing')) {
                  await updateDoc(activeRef, {
                    status: 'ended',
                    endedAt: serverTimestamp(),
                    updatedAt: serverTimestamp(),
                  });
                }
              }
              set({ callState: 'ended' });
              setTimeout(() => resetCallState(set), 1200);
            });
          }
        } catch (error) {
          console.error('Failed connecting to accepted call:', error);
          set({
            error: (error as Error).message,
            callState: 'ended',
          });
          setTimeout(() => resetCallState(set), 1200);
        }
        return;
      }

      if (status === 'ringing') {
        if (isCaller && get().callState !== 'ringing') {
          set({ callState: 'ringing' });
        }
        return;
      }

      if (status === 'rejected' || status === 'busy' || status === 'missed' || status === 'canceled' || status === 'ended') {
        const reason =
          status === 'rejected'
            ? 'Call was declined'
            : status === 'busy'
            ? 'User is busy on another call'
            : status === 'missed'
            ? 'Call timed out'
            : status === 'canceled'
            ? 'Call was canceled'
            : null;

        clearActiveCallSubscription();
        set({
          error: reason,
          callState: 'ended',
          isIncomingCall: false,
          incomingCallData: null,
        });

        setTimeout(() => resetCallState(set), 1200);
      }
    });

    set({ activeCallUnsubscribe: unsubscribe });
  };

  return {
    currentCall: null,
    room: null,
    remoteParticipants: [],
    localTracks: {},
    remoteTracks: {},
    callState: 'idle',
    audioEnabled: true,
    videoEnabled: true,
    audioProcessingEnabled: true,
    error: null,
    isIncomingCall: false,
    incomingCallData: null,
    activeCallId: null,
    activeRoomName: null,
    incomingCallUnsubscribe: null,
    activeCallUnsubscribe: null,

    initiateCall: async (remoteUserId: string, remoteUserName: string, isVideo = true) => {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        set({ error: 'Not authenticated' });
        return;
      }
      if (currentUser.uid === remoteUserId) {
        set({ error: 'Cannot call yourself' });
        return;
      }
      if (get().callState === 'connecting' || get().callState === 'connected' || get().isIncomingCall) {
        set({ error: 'You are already in a call' });
        return;
      }

      set({ callState: 'connecting', error: null });

      try {
        const roomName = [currentUser.uid, remoteUserId].sort().join('_');
        const callerName = currentUser.displayName || currentUser.email || 'User';

        const callDoc = await addDoc(collection(firestore, 'callSessions'), {
          callerId: currentUser.uid,
          callerName,
          calleeId: remoteUserId,
          calleeName: remoteUserName,
          roomName,
          isVideo,
          status: 'ringing',
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          timeoutAt: Date.now() + CALL_TIMEOUT_MS,
        });

        const callId = callDoc.id;
        set({
          activeCallId: callId,
          activeRoomName: roomName,
          callState: 'ringing',
          videoEnabled: isVideo,
          currentCall: {
            callId,
            remoteUserId,
            remoteUserName,
            startTime: Date.now(),
            duration: 0,
            state: 'ringing',
          },
        });

        watchCallSession(callId);

        void notifyIncomingCallFallback(remoteUserId, {
          callId,
          callerId: currentUser.uid,
          callerName,
          roomName,
          isVideo,
        });

        setTimeout(async () => {
          const activeId = get().activeCallId;
          if (!activeId || activeId !== callId) return;
          try {
            const callRef = doc(firestore, 'callSessions', callId);
            const callSnap = await getDoc(callRef);
            if (!callSnap.exists()) return;
            const status = callSnap.data()?.status as CallSessionStatus;
            if (status === 'ringing' && callSnap.data()?.callerId === currentUser.uid) {
              await updateDoc(callRef, {
                status: 'missed',
                updatedAt: serverTimestamp(),
              });
            }
          } catch (error) {
            console.warn('Failed to mark missed call:', error);
          }
        }, CALL_TIMEOUT_MS);
      } catch (error) {
        console.error('Failed to initiate call:', error);
        set({
          error: (error as Error).message,
          callState: 'idle',
          currentCall: null,
        });
      }
    },

    acceptIncomingCall: async () => {
      const incomingCallData = get().incomingCallData;
      if (!incomingCallData) return;

      set({
        callState: 'connecting',
        isIncomingCall: false,
        error: null,
      });

      try {
        const callRef = doc(firestore, 'callSessions', incomingCallData.callId);
        await updateDoc(callRef, {
          status: 'accepted',
          acceptedAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });

        set({
          activeCallId: incomingCallData.callId,
          activeRoomName: incomingCallData.roomName,
          currentCall: {
            callId: incomingCallData.callId,
            remoteUserId: incomingCallData.callerId,
            remoteUserName: incomingCallData.callerName,
            startTime: Date.now(),
            duration: 0,
            state: 'connecting',
          },
          videoEnabled: incomingCallData.isVideo,
          incomingCallData: null,
        });

        watchCallSession(incomingCallData.callId);
      } catch (error) {
        console.error('Failed to accept call:', error);
        set({
          error: (error as Error).message,
          callState: 'idle',
          currentCall: null,
          incomingCallData: null,
        });
      }
    },

    rejectIncomingCall: async () => {
      const incomingCallData = get().incomingCallData;
      if (incomingCallData) {
        try {
          await updateDoc(doc(firestore, 'callSessions', incomingCallData.callId), {
            status: 'rejected',
            updatedAt: serverTimestamp(),
          });
        } catch (error) {
          console.warn('Failed to reject call session:', error);
        }
      }

      set({
        isIncomingCall: false,
        incomingCallData: null,
        callState: 'idle',
      });
    },

    endCall: async () => {
      const { currentCall, activeCallId } = get();
      try {
        if (IS_JITSI_PROVIDER) {
          await jitsiService.leaveRoom();
        } else {
          await liveKitService.disableAudioProcessing();
          await liveKitService.disconnect();
        }
      } catch (error) {
        console.warn('LiveKit disconnect warning:', error);
      }

      if (activeCallId) {
        try {
          const callRef = doc(firestore, 'callSessions', activeCallId);
          const callSnap = await getDoc(callRef);
          if (callSnap.exists()) {
            const status = callSnap.data()?.status as CallSessionStatus;
            if (status === 'ringing' || status === 'accepted') {
              await updateDoc(callRef, {
                status: currentCall?.state === 'ringing' ? 'canceled' : 'ended',
                endedAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
              });
            }
          }
        } catch (error) {
          console.warn('Failed to update call end status:', error);
        }
      }

      clearActiveCallSubscription();
      set({
        callState: 'ended',
        currentCall: currentCall
          ? {
              ...currentCall,
              state: 'ended',
              endTime: Date.now(),
              duration: Math.max(0, Date.now() - currentCall.startTime),
            }
          : null,
      });

      setTimeout(() => resetCallState(set), 1200);
    },

    toggleAudio: async () => {
      const audioEnabled = get().audioEnabled;
      try {
        if (IS_JITSI_PROVIDER) {
          await jitsiService.toggleAudio(!audioEnabled);
        } else {
          await liveKitService.toggleAudio(!audioEnabled);
        }
        set({ audioEnabled: !audioEnabled });
      } catch (error) {
        console.error('Failed to toggle audio:', error);
      }
    },

    toggleVideo: async () => {
      const videoEnabled = get().videoEnabled;
      try {
        if (IS_JITSI_PROVIDER) {
          await jitsiService.toggleVideo(!videoEnabled);
        } else {
          await liveKitService.toggleVideo(!videoEnabled);
        }
        set({ videoEnabled: !videoEnabled });
      } catch (error) {
        console.error('Failed to toggle video:', error);
      }
    },

    toggleAudioProcessing: async () => {
      const audioProcessingEnabled = get().audioProcessingEnabled;
      if (IS_JITSI_PROVIDER) {
        set({ audioProcessingEnabled: !audioProcessingEnabled });
        return;
      }
      try {
        if (audioProcessingEnabled) {
          await liveKitService.disableAudioProcessing();
        } else {
          await liveKitService.enableAudioProcessing();
        }
        set({ audioProcessingEnabled: !audioProcessingEnabled });
      } catch (error) {
        console.error('Failed to toggle audio processing:', error);
      }
    },

    handleIncomingCall: async (data) => {
      const currentUser = auth.currentUser;
      if (!currentUser) return;

      // If already busy, mark incoming call as busy.
      if (get().callState === 'connecting' || get().callState === 'connected' || get().isIncomingCall) {
        try {
          await updateDoc(doc(firestore, 'callSessions', data.callId), {
            status: 'busy',
            updatedAt: serverTimestamp(),
          });
        } catch (error) {
          console.warn('Failed to mark busy call:', error);
        }
        return;
      }

      set({
        isIncomingCall: true,
        incomingCallData: data,
        callState: 'ringing',
      });
    },

    initializeIncomingCallListener: () => {
      const currentUser = auth.currentUser;
      if (!currentUser) return;

      const existingUnsubscribe = get().incomingCallUnsubscribe;
      if (existingUnsubscribe) {
        existingUnsubscribe();
      }

      const incomingQuery = query(
        collection(firestore, 'callSessions'),
        where('calleeId', '==', currentUser.uid),
        where('status', '==', 'ringing')
      );

      const unsubscribe = onSnapshot(incomingQuery, async (snapshot) => {
        if (snapshot.empty) {
          const { isIncomingCall, incomingCallData, callState } = get();
          if (isIncomingCall && incomingCallData && callState === 'ringing') {
            set({
              isIncomingCall: false,
              incomingCallData: null,
              callState: 'idle',
            });
          }
          return;
        }

        const calls = snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() })) as Array<any>;
        const latest = calls
          .filter((call) => !!call?.callerId && !!call?.roomName)
          .sort((a, b) => toMillis(b.createdAt) - toMillis(a.createdAt))[0] as
          | {
              id: string;
              callerId: string;
              callerName?: string;
              roomName: string;
              isVideo?: boolean;
            }
          | undefined;

        if (!latest) return;
        const incomingCallData: IncomingCallData = {
          callId: latest.id,
          callerId: latest.callerId,
          callerName: latest.callerName || 'Unknown',
          roomName: latest.roomName,
          isVideo: latest.isVideo !== false,
        };

        const activeIncomingId = get().incomingCallData?.callId;
        if (activeIncomingId !== incomingCallData.callId) {
          await get().handleIncomingCall(incomingCallData);
        }
      }, (error) => {
        console.error('Incoming call listener error:', error);
      });

      set({ incomingCallUnsubscribe: unsubscribe });
    },

    cleanup: () => {
      clearActiveCallSubscription();
      const incomingCallUnsubscribe = get().incomingCallUnsubscribe;
      if (incomingCallUnsubscribe) {
        incomingCallUnsubscribe();
      }
      set({
        incomingCallUnsubscribe: null,
      });
      if (IS_JITSI_PROVIDER) {
        void jitsiService.leaveRoom();
      } else {
        void liveKitService.disconnect();
      }
      resetCallState(set);
    },

    clearError: () => set({ error: null }),
  };
});
