import { create } from 'zustand';
import { Room, RemoteParticipant, LocalTrack, RemoteTrack } from 'livekit-client';
import { liveKitService } from '@/services/livekit';
import { CallInfo, CallState } from '@/types';
import { auth } from '@/config/firebase';

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
  incomingCallData: {
    callId: string;
    callerId: string;
    callerName: string;
  } | null;
  
  // Actions
  initiateCall: (remoteUserId: string, remoteUserName: string, isVideo?: boolean) => Promise<void>;
  acceptIncomingCall: () => Promise<void>;
  rejectIncomingCall: () => void;
  endCall: () => Promise<void>;
  toggleAudio: () => Promise<void>;
  toggleVideo: () => Promise<void>;
  toggleAudioProcessing: () => Promise<void>;
  handleIncomingCall: (data: { callId: string; callerId: string; callerName: string }) => void;
  clearError: () => void;
}

export const useCallStore = create<CallStore>((set, get) => ({
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

  initiateCall: async (remoteUserId: string, remoteUserName: string, isVideo = true) => {
    set({ callState: 'connecting', error: null });
    
    try {
      const callId = `${Date.now()}_${remoteUserId}`;
      const roomName = [auth.currentUser?.uid, remoteUserId].sort().join('_');
      const localUserName = auth.currentUser?.displayName || auth.currentUser?.email || 'User';
      
      set({
        currentCall: {
          callId,
          remoteUserId,
          remoteUserName,
          startTime: Date.now(),
          duration: 0,
          state: 'connecting',
        },
        callState: 'connecting',
        videoEnabled: isVideo,
      });

      const room = await liveKitService.connectToRoom(roomName, localUserName, {
        audio: true,
        video: isVideo,
      });

      if (get().audioProcessingEnabled) {
        await liveKitService.enableAudioProcessing();
      }

      // Setup event listeners
      liveKitService.onParticipantConnected((participant) => {
        set((state) => ({
          remoteParticipants: [...state.remoteParticipants, participant],
        }));
      });

      liveKitService.onParticipantDisconnected((participant) => {
        set((state) => ({
          remoteParticipants: state.remoteParticipants.filter(
            (p) => p.identity !== participant.identity
          ),
        }));
      });

      liveKitService.onConnectionStateChanged((state) => {
        if (state === 'reconnecting') {
          set({ callState: 'connecting' });
        } else if (state === 'connected') {
          set({ callState: 'connected' });
        }
      });

      liveKitService.onDisconnected(() => {
        set({
          currentCall: null,
          room: null,
          remoteParticipants: [],
          localTracks: {},
          remoteTracks: {},
          callState: 'ended',
        });
      });

      set({
        room,
        callState: 'connected',
        currentCall: {
          ...get().currentCall!,
          state: 'connected',
          startTime: Date.now(),
        },
      });

    } catch (error) {
      console.error('Failed to initiate call:', error);
      set({
        error: (error as Error).message,
        callState: 'ended',
        currentCall: null,
      });
    }
  },

  acceptIncomingCall: async () => {
    const { incomingCallData } = get();
    if (!incomingCallData) return;

    set({ 
      callState: 'connecting', 
      isIncomingCall: false,
      error: null 
    });

    try {
      const { callerId, callerName, callId } = incomingCallData;
      const roomName = [auth.currentUser?.uid, callerId].sort().join('_');
      const localUserName = auth.currentUser?.displayName || auth.currentUser?.email || 'User';

      set({
        currentCall: {
          callId,
          remoteUserId: callerId,
          remoteUserName: callerName,
          startTime: Date.now(),
          duration: 0,
          state: 'connecting',
        },
      });

      const room = await liveKitService.connectToRoom(roomName, localUserName, {
        audio: true,
        video: true,
      });

      if (get().audioProcessingEnabled) {
        await liveKitService.enableAudioProcessing();
      }

      liveKitService.onConnectionStateChanged((state) => {
        if (state === 'reconnecting') {
          set({ callState: 'connecting' });
        } else if (state === 'connected') {
          set({ callState: 'connected' });
        }
      });

      liveKitService.onDisconnected(() => {
        set({
          currentCall: null,
          room: null,
          remoteParticipants: [],
          localTracks: {},
          remoteTracks: {},
          callState: 'ended',
        });
      });

      set({
        room,
        callState: 'connected',
        incomingCallData: null,
        currentCall: {
          ...get().currentCall!,
          state: 'connected',
          startTime: Date.now(),
        },
      });

    } catch (error) {
      console.error('Failed to accept call:', error);
      set({
        error: (error as Error).message,
        callState: 'ended',
        currentCall: null,
        incomingCallData: null,
      });
    }
  },

  rejectIncomingCall: () => {
    set({
      isIncomingCall: false,
      incomingCallData: null,
      callState: 'idle',
    });
  },

  endCall: async () => {
    const { currentCall } = get();
    if (!currentCall) return;

    try {
      await liveKitService.disableAudioProcessing();
      await liveKitService.disconnect();
      
      set({
        currentCall: {
          ...currentCall,
          state: 'ended',
          endTime: Date.now(),
          duration: Date.now() - currentCall.startTime,
        },
        room: null,
        remoteParticipants: [],
        localTracks: {},
        remoteTracks: {},
        callState: 'ended',
      });

      // Reset after a short delay
      setTimeout(() => {
        set({
          currentCall: null,
          callState: 'idle',
        });
      }, 2000);

    } catch (error) {
      console.error('Failed to end call:', error);
      set({
        currentCall: null,
        room: null,
        callState: 'idle',
      });
    }
  },

  toggleAudio: async () => {
    const { audioEnabled } = get();
    try {
      await liveKitService.toggleAudio(!audioEnabled);
      set({ audioEnabled: !audioEnabled });
    } catch (error) {
      console.error('Failed to toggle audio:', error);
    }
  },

  toggleVideo: async () => {
    const { videoEnabled } = get();
    try {
      await liveKitService.toggleVideo(!videoEnabled);
      set({ videoEnabled: !videoEnabled });
    } catch (error) {
      console.error('Failed to toggle video:', error);
    }
  },

  toggleAudioProcessing: async () => {
    const { audioProcessingEnabled } = get();
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

  handleIncomingCall: (data) => {
    set({
      isIncomingCall: true,
      incomingCallData: data,
      callState: 'ringing',
    });
  },

  clearError: () => set({ error: null }),
}));

// Import auth for use in store
import { auth } from '@/config/firebase';
