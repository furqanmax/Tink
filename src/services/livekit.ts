import { Room, LocalParticipant, RemoteParticipant, RoomEvent, LocalAudioTrack, LocalVideoTrack } from 'livekit-client';
import { httpsCallable } from 'firebase/functions';
import { functions } from '@/config/firebase';
import { SimpleAudioProcessor } from '@/services/audioProcessing';

const LIVEKIT_URL = import.meta.env.VITE_LIVEKIT_URL || 'ws://localhost:7880';

export class LiveKitService {
  private room: Room | null = null;
  private localParticipant: LocalParticipant | null = null;
  private remoteParticipants: Map<string, RemoteParticipant> = new Map();
  private eventHandlers: Map<string, Function[]> = new Map();
  private audioProcessor: SimpleAudioProcessor | null = null;

  /**
   * Generate LiveKit access token via Cloud Function
   */
  async getAccessToken(roomName: string, userName: string): Promise<string> {
    const generateToken = httpsCallable(functions, 'generateLiveKitToken');
    
    const response = await generateToken({
      roomName,
      userName,
    });

    return (response.data as { token: string }).token;
  }

  /**
   * Connect to a LiveKit room
   */
  async connectToRoom(
    roomName: string,
    userName: string,
    options?: {
      video?: boolean;
      audio?: boolean;
      autoSubscribe?: boolean;
    }
  ): Promise<Room> {
    try {
      const token = await this.getAccessToken(roomName, userName);

      const room = new Room();

      await room.connect(LIVEKIT_URL, token, {
        autoSubscribe: options?.autoSubscribe !== false,
      });

      if (options?.audio !== false) {
        await room.localParticipant.setMicrophoneEnabled(true);
      }

      if (options?.video !== false) {
        await room.localParticipant.setCameraEnabled(true);
      }

      this.room = room;

      this.localParticipant = this.room.localParticipant;
      this.setupEventListeners();

      return this.room;
    } catch (error) {
      console.error('Failed to connect to room:', error);
      throw error;
    }
  }

  /**
   * Disconnect from room
   */
  async disconnect(): Promise<void> {
    if (this.room) {
      await this.room.disconnect();
      this.room = null;
      this.localParticipant = null;
      this.remoteParticipants.clear();
    }
  }

  /**
   * Toggle audio mute/unmute
   */
  async toggleAudio(enabled: boolean): Promise<void> {
    if (!this.localParticipant) return;

    const audioTrack = this.getLocalAudioTrack();
    if (audioTrack) {
      if (enabled) {
        await audioTrack.unmute();
      } else {
        await audioTrack.mute();
      }
    }
  }

  /**
   * Toggle video enable/disable
   */
  async toggleVideo(enabled: boolean): Promise<void> {
    if (!this.localParticipant) return;

    const videoTrack = this.getLocalVideoTrack();
    if (videoTrack) {
      if (enabled) {
        await videoTrack.unmute();
      } else {
        await videoTrack.mute();
      }
    }
  }

  /**
   * Get local video track
   */
  getLocalVideoTrack() {
    if (!this.localParticipant) return null;
    const publication = Array.from(this.localParticipant.videoTracks.values())[0];
    return (publication?.track as LocalVideoTrack) || null;
  }

  /**
   * Get local audio track
   */
  getLocalAudioTrack() {
    if (!this.localParticipant) return null;
    const publication = Array.from(this.localParticipant.audioTracks.values())[0];
    return (publication?.track as LocalAudioTrack) || null;
  }

  /**
   * Get remote participants
   */
  getRemoteParticipants(): RemoteParticipant[] {
    return Array.from(this.remoteParticipants.values());
  }

  /**
   * Get room statistics
   */
  async getRoomStats() {
    if (!this.room) return null;

    return {
      roomName: this.room.name,
      participantCount: this.room.participants.size,
      isConnected: this.room.state === 'connected',
    };
  }

  /**
   * Register event handlers
   */
  onParticipantConnected(callback: (participant: RemoteParticipant) => void): void {
    this.addEventHandler('participantConnected', callback);
  }

  onParticipantDisconnected(callback: (participant: RemoteParticipant) => void): void {
    this.addEventHandler('participantDisconnected', callback);
  }

  onTrackSubscribed(callback: (track: any, publication: any, participant: RemoteParticipant) => void): void {
    this.addEventHandler('trackSubscribed', callback);
  }

  onConnectionStateChanged(callback: (state: string) => void): void {
    this.addEventHandler('connectionStateChanged', callback);
  }

  onDisconnected(callback: () => void): void {
    this.addEventHandler('disconnected', callback);
  }

  /**
   * Check if currently in a call
   */
  isInCall(): boolean {
    return this.room !== null && this.room.state === 'connected';
  }

  /**
   * Get current room
   */
  getRoom(): Room | null {
    return this.room;
  }

  /**
   * Enable basic audio processing (noise reduction + filtering)
   */
  async enableAudioProcessing(): Promise<void> {
    const audioTrack = this.getLocalAudioTrack();
    if (!audioTrack) return;

    if (!this.audioProcessor) {
      this.audioProcessor = new SimpleAudioProcessor();
    }

    try {
      await audioTrack.setProcessor(this.audioProcessor as any);
    } catch (error) {
      console.warn('Failed to enable audio processing:', error);
    }
  }

  /**
   * Disable audio processing
   */
  async disableAudioProcessing(): Promise<void> {
    const audioTrack = this.getLocalAudioTrack();
    if (!audioTrack) return;

    try {
      await audioTrack.stopProcessor();
    } catch (error) {
      console.warn('Failed to disable audio processing:', error);
    } finally {
      this.audioProcessor = null;
    }
  }

  private setupEventListeners(): void {
    if (!this.room) return;

    this.room
      .on(RoomEvent.ParticipantConnected, (participant: RemoteParticipant) => {
        this.remoteParticipants.set(participant.identity, participant);
        this.triggerEvent('participantConnected', participant);
      })
      .on(RoomEvent.ParticipantDisconnected, (participant: RemoteParticipant) => {
        this.remoteParticipants.delete(participant.identity);
        this.triggerEvent('participantDisconnected', participant);
      })
      .on(RoomEvent.TrackSubscribed, (track, publication, participant) => {
        this.triggerEvent('trackSubscribed', track, publication, participant);
      })
      .on(RoomEvent.ConnectionStateChanged, (state) => {
        this.triggerEvent('connectionStateChanged', state);
      })
      .on(RoomEvent.Disconnected, () => {
        this.triggerEvent('disconnected');
      });
  }

  private addEventHandler(event: string, handler: Function): void {
    if (!this.eventHandlers.has(event)) {
      this.eventHandlers.set(event, []);
    }
    this.eventHandlers.get(event)!.push(handler);
  }

  private triggerEvent(event: string, ...args: any[]): void {
    const handlers = this.eventHandlers.get(event);
    if (handlers) {
      handlers.forEach(handler => handler(...args));
    }
  }
}

export const liveKitService = new LiveKitService();
