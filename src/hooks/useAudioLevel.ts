import { useEffect, useState } from 'react';
import { createAudioLevelMeter } from '@/services/audioProcessing';
import type { LocalAudioTrack } from 'livekit-client';

export function useAudioLevel(track: LocalAudioTrack | null, enabled = true): number {
  const [level, setLevel] = useState(0);

  useEffect(() => {
    if (!track || !enabled) {
      setLevel(0);
      return;
    }

    const mediaTrack = track.mediaStreamTrack;
    if (!mediaTrack) {
      setLevel(0);
      return;
    }

    let cleanup: (() => void) | null = null;

    try {
      cleanup = createAudioLevelMeter(mediaTrack, setLevel);
    } catch (error) {
      console.warn('Audio level meter unavailable:', error);
      setLevel(0);
    }

    return () => {
      if (cleanup) cleanup();
    };
  }, [track, enabled]);

  return level;
}
