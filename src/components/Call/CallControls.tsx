import { Mic, MicOff, Video, VideoOff, PhoneOff, Monitor, MoreHorizontal, Filter } from 'lucide-react';

interface CallControlsProps {
  audioEnabled: boolean;
  videoEnabled: boolean;
  audioProcessingEnabled: boolean;
  onToggleAudio: () => void;
  onToggleVideo: () => void;
  onToggleAudioProcessing: () => void;
  onEndCall: () => void;
}

export function CallControls({
  audioEnabled,
  videoEnabled,
  audioProcessingEnabled,
  onToggleAudio,
  onToggleVideo,
  onToggleAudioProcessing,
  onEndCall,
}: CallControlsProps) {
  return (
    <div className="flex items-center justify-center gap-4 px-6 py-6 bg-gray-800/50 backdrop-blur-sm">
      {/* Audio Toggle */}
      <button
        onClick={onToggleAudio}
        className={`p-4 rounded-full transition-all ${
          audioEnabled
            ? 'bg-gray-700 hover:bg-gray-600 text-white'
            : 'bg-red-500 hover:bg-red-600 text-white'
        }`}
        title={audioEnabled ? 'Mute microphone' : 'Unmute microphone'}
      >
        {audioEnabled ? (
          <Mic className="w-6 h-6" />
        ) : (
          <MicOff className="w-6 h-6" />
        )}
      </button>

      {/* Video Toggle */}
      <button
        onClick={onToggleVideo}
        className={`p-4 rounded-full transition-all ${
          videoEnabled
            ? 'bg-gray-700 hover:bg-gray-600 text-white'
            : 'bg-red-500 hover:bg-red-600 text-white'
        }`}
        title={videoEnabled ? 'Turn off camera' : 'Turn on camera'}
      >
        {videoEnabled ? (
          <Video className="w-6 h-6" />
        ) : (
          <VideoOff className="w-6 h-6" />
        )}
      </button>

      {/* Audio Filter Toggle */}
      <button
        onClick={onToggleAudioProcessing}
        className={`p-4 rounded-full transition-all ${
          audioProcessingEnabled
            ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
            : 'bg-gray-700 hover:bg-gray-600 text-white'
        }`}
        title={audioProcessingEnabled ? 'Disable audio filter' : 'Enable audio filter'}
      >
        <Filter className="w-6 h-6" />
      </button>

      {/* Screen Share (Placeholder) */}
      <button
        className="p-4 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-all"
        title="Share screen"
        onClick={() => alert('Screen sharing coming soon!')}
      >
        <Monitor className="w-6 h-6" />
      </button>

      {/* More Options (Placeholder) */}
      <button
        className="p-4 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-all"
        title="More options"
      >
        <MoreHorizontal className="w-6 h-6" />
      </button>

      {/* End Call */}
      <button
        onClick={onEndCall}
        className="p-4 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all"
        title="End call"
      >
        <PhoneOff className="w-6 h-6" />
      </button>
    </div>
  );
}
