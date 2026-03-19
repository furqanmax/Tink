import { useEffect, useRef, useState } from 'react';
import { useCallStore } from '@/store/callStore';
import { useAuthStore } from '@/store/authStore';
import { CallControls } from './CallControls';
import { formatDuration } from '@/utils/formatters';
import { PhoneOff, MicOff, VideoOff } from 'lucide-react';
import { useAudioLevel } from '@/hooks/useAudioLevel';
import { liveKitService } from '@/services/livekit';

interface CallWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CallWindow({ isOpen, onClose }: CallWindowProps) {
  const {
    currentCall,
    callState,
    room,
    remoteParticipants,
    audioEnabled,
    videoEnabled,
    audioProcessingEnabled,
    endCall,
    toggleAudio,
    toggleVideo,
    toggleAudioProcessing,
  } = useCallStore();

  const { user } = useAuthStore();
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const [callDuration, setCallDuration] = useState(0);
  const localAudioTrack = liveKitService.getLocalAudioTrack();
  const audioLevel = useAudioLevel(localAudioTrack, audioEnabled);

  // Update local video stream
  useEffect(() => {
    if (!room || !localVideoRef.current) return;

    const localParticipant = room.localParticipant;
    const videoTrack = Array.from(localParticipant.videoTracks.values())[0]?.track;
    
    if (videoTrack && localVideoRef.current) {
      const mediaStream = new MediaStream([videoTrack.mediaStreamTrack]);
      localVideoRef.current.srcObject = mediaStream;
    }
  }, [room, videoEnabled]);

  // Update remote video stream
  useEffect(() => {
    if (remoteParticipants.length === 0 || !remoteVideoRef.current) return;

    const remoteParticipant = remoteParticipants[0];
    const videoTrack = Array.from(remoteParticipant.videoTracks.values())[0]?.track;
    
    if (videoTrack && remoteVideoRef.current) {
      const mediaStream = new MediaStream([videoTrack.mediaStreamTrack]);
      remoteVideoRef.current.srcObject = mediaStream;
    }
  }, [remoteParticipants]);

  // Call duration timer
  useEffect(() => {
    if (callState !== 'connected') return;

    const interval = setInterval(() => {
      if (currentCall?.startTime) {
        setCallDuration(Math.floor((Date.now() - currentCall.startTime) / 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [callState, currentCall?.startTime]);

  const handleEndCall = async () => {
    await endCall();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-800/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-medium">
              {currentCall?.remoteUserName?.[0]?.toUpperCase() || '?'}
            </span>
          </div>
          <div>
            <h3 className="text-white font-medium">{currentCall?.remoteUserName || 'Unknown'}</h3>
            <p className="text-sm text-gray-400">
              {callState === 'connecting' && 'Connecting...'}
              {callState === 'connected' && formatDuration(callDuration)}
              {callState === 'ended' && 'Call ended'}
            </p>
          </div>
        </div>

        <button
          onClick={handleEndCall}
          className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors"
        >
          <PhoneOff className="w-6 h-6" />
        </button>
      </div>

      {/* Video Grid */}
      <div className="flex-1 relative p-4">
        {/* Remote Video (Full Screen) */}
        <div className="absolute inset-4 bg-gray-800 rounded-2xl overflow-hidden">
          {remoteParticipants.length > 0 ? (
            <video
              ref={remoteVideoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl text-gray-400">
                    {currentCall?.remoteUserName?.[0]?.toUpperCase() || '?'}
                  </span>
                </div>
                <p className="text-gray-400">
                  {callState === 'connecting' ? 'Connecting...' : 'Waiting for video...'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Local Video (Picture-in-Picture) */}
        <div className="absolute bottom-8 right-8 w-48 h-36 bg-gray-800 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-700">
          <video
            ref={localVideoRef}
            autoPlay
            playsInline
            muted
            className={`w-full h-full object-cover ${!videoEnabled ? 'hidden' : ''}`}
          />
          {!videoEnabled && (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-xl text-gray-400">
                  {user?.displayName?.[0]?.toUpperCase() || '?'}
                </span>
              </div>
            </div>
          )}
          
          {/* Local video indicators */}
          <div className="absolute bottom-2 left-2 flex items-center gap-2">
            {!audioEnabled && (
              <div className="p-1 bg-red-500/80 rounded-full">
                <MicOff className="w-3 h-3 text-white" />
              </div>
            )}
            {!videoEnabled && (
              <div className="p-1 bg-red-500/80 rounded-full">
                <VideoOff className="w-3 h-3 text-white" />
              </div>
            )}
          </div>

          {/* Audio level meter */}
          <div className="absolute bottom-2 right-2 w-10 h-2 bg-gray-700/80 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-400 transition-[width] duration-100"
              style={{ width: `${Math.min(100, Math.round(audioLevel * 100))}%` }}
            />
          </div>
        </div>
      </div>

      {/* Controls */}
      <CallControls
        audioEnabled={audioEnabled}
        videoEnabled={videoEnabled}
        audioProcessingEnabled={audioProcessingEnabled}
        onToggleAudio={toggleAudio}
        onToggleVideo={toggleVideo}
        onToggleAudioProcessing={toggleAudioProcessing}
        onEndCall={handleEndCall}
      />
    </div>
  );
}
