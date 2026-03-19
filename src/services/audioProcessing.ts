import type { Track, TrackProcessor, AudioProcessorOptions } from 'livekit-client';

const DEFAULT_FILTERS = {
  highPassHz: 80,
  lowPassHz: 12000,
};

export class SimpleAudioProcessor implements TrackProcessor<Track.Kind.Audio, AudioProcessorOptions> {
  name = 'simple-audio-processor';
  processedTrack?: MediaStreamTrack;

  private audioContext: AudioContext | null = null;
  private sourceNode: MediaStreamAudioSourceNode | null = null;
  private destinationNode: MediaStreamAudioDestinationNode | null = null;
  private highPassFilter: BiquadFilterNode | null = null;
  private lowPassFilter: BiquadFilterNode | null = null;
  private compressor: DynamicsCompressorNode | null = null;

  async init(opts: AudioProcessorOptions): Promise<void> {
    await this.setupGraph(opts.track);
  }

  async restart(opts: AudioProcessorOptions): Promise<void> {
    await this.destroy();
    await this.setupGraph(opts.track);
  }

  async destroy(): Promise<void> {
    if (this.sourceNode) this.sourceNode.disconnect();
    if (this.highPassFilter) this.highPassFilter.disconnect();
    if (this.lowPassFilter) this.lowPassFilter.disconnect();
    if (this.compressor) this.compressor.disconnect();

    this.sourceNode = null;
    this.highPassFilter = null;
    this.lowPassFilter = null;
    this.compressor = null;

    if (this.audioContext) {
      await this.audioContext.close();
      this.audioContext = null;
    }

    this.destinationNode = null;
    this.processedTrack = undefined;
  }

  private async setupGraph(track: MediaStreamTrack): Promise<void> {
    if (typeof AudioContext === 'undefined') {
      throw new Error('AudioContext is not available in this environment');
    }

    this.audioContext = new AudioContext();

    const stream = new MediaStream([track]);
    this.sourceNode = this.audioContext.createMediaStreamSource(stream);

    this.highPassFilter = this.audioContext.createBiquadFilter();
    this.highPassFilter.type = 'highpass';
    this.highPassFilter.frequency.value = DEFAULT_FILTERS.highPassHz;

    this.lowPassFilter = this.audioContext.createBiquadFilter();
    this.lowPassFilter.type = 'lowpass';
    this.lowPassFilter.frequency.value = DEFAULT_FILTERS.lowPassHz;

    this.compressor = this.audioContext.createDynamicsCompressor();
    this.compressor.threshold.value = -24;
    this.compressor.knee.value = 30;
    this.compressor.ratio.value = 12;
    this.compressor.attack.value = 0.003;
    this.compressor.release.value = 0.25;

    this.destinationNode = this.audioContext.createMediaStreamDestination();

    this.sourceNode
      .connect(this.highPassFilter)
      .connect(this.lowPassFilter)
      .connect(this.compressor)
      .connect(this.destinationNode);

    const [processedTrack] = this.destinationNode.stream.getAudioTracks();
    if (!processedTrack) {
      throw new Error('Failed to create processed audio track');
    }

    this.processedTrack = processedTrack;
  }
}

export function createAudioLevelMeter(
  track: MediaStreamTrack,
  onLevel: (level: number) => void
): () => void {
  const audioContext = new AudioContext();
  const source = audioContext.createMediaStreamSource(new MediaStream([track]));
  const analyser = audioContext.createAnalyser();

  analyser.fftSize = 512;
  source.connect(analyser);

  const data = new Uint8Array(analyser.fftSize);
  let rafId = 0;

  const update = () => {
    analyser.getByteTimeDomainData(data);
    let sum = 0;

    for (let i = 0; i < data.length; i += 1) {
      const value = (data[i] - 128) / 128;
      sum += value * value;
    }

    const rms = Math.sqrt(sum / data.length);
    onLevel(Math.min(1, rms * 2.5));
    rafId = requestAnimationFrame(update);
  };

  update();

  return () => {
    cancelAnimationFrame(rafId);
    source.disconnect();
    analyser.disconnect();
    audioContext.close();
  };
}
