import { useEffect, useRef } from 'react';
import { useCallStore } from '@/store/callStore';
import { Phone, PhoneOff, Video, User } from 'lucide-react';

interface IncomingCallNotificationProps {
  isOpen: boolean;
}

export function IncomingCallNotification({ isOpen }: IncomingCallNotificationProps) {
  const {
    isIncomingCall,
    incomingCallData,
    acceptIncomingCall,
    rejectIncomingCall,
  } = useCallStore();

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const toneIntervalRef = useRef<number | null>(null);
  const toneContextRef = useRef<AudioContext | null>(null);

  const stopFallbackTone = () => {
    if (toneIntervalRef.current) {
      window.clearInterval(toneIntervalRef.current);
      toneIntervalRef.current = null;
    }
    if (toneContextRef.current) {
      void toneContextRef.current.close();
      toneContextRef.current = null;
    }
  };

  const startFallbackTone = () => {
    if (toneIntervalRef.current) return;
    const AudioCtx = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;

    const context = new AudioCtx();
    toneContextRef.current = context;

    const beep = () => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(880, context.currentTime);
      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.15, context.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.35);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.35);
    };

    beep();
    toneIntervalRef.current = window.setInterval(beep, 1200);
  };

  // Play ringtone when incoming call
  useEffect(() => {
    if (isIncomingCall && isOpen) {
      // Create audio element for ringtone
      audioRef.current = new Audio('/sounds/incoming-call.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
      
      // Try to play (may be blocked by browser autoplay policy)
      audioRef.current.play().catch((error) => {
        console.log('Could not autoplay ringtone:', error);
        startFallbackTone();
      });

      audioRef.current.onerror = () => {
        startFallbackTone();
      };

      // Vibrate device if supported
      if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200, 100, 200]);
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
      stopFallbackTone();
    };
  }, [isIncomingCall, isOpen]);

  const handleAccept = async () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    stopFallbackTone();
    await acceptIncomingCall();
  };

  const handleReject = async () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    stopFallbackTone();
    await rejectIncomingCall();
  };

  if (!isOpen || !isIncomingCall || !incomingCallData) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full mx-4 text-center animate-in fade-in zoom-in duration-300">
        {/* Caller Avatar */}
        <div className="relative mb-6">
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <User className="w-12 h-12 text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
            <Video className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Caller Info */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {incomingCallData.callerName}
        </h2>
        <p className="text-gray-500 mb-8">
          Incoming {incomingCallData.isVideo ? 'video' : 'audio'} call...
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-6">
          {/* Decline Button */}
          <button
            onClick={handleReject}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-red-500/30">
              <PhoneOff className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm text-gray-600">Decline</span>
          </button>

          {/* Accept Button */}
          <button
            onClick={handleAccept}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-green-500/30">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm text-gray-600">Accept</span>
          </button>
        </div>
      </div>
    </div>
  );
}
