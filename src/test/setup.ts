import 'fake-indexeddb/auto';

// JSDOM lacks these defaults; guard to avoid errors in tests that reference them.
if (!('Notification' in globalThis)) {
  (globalThis as any).Notification = class Notification {
    static permission = 'granted';
    static requestPermission = async () => 'granted';

    constructor() {}
  };
}

if (!('AudioContext' in globalThis)) {
  (globalThis as any).AudioContext = class AudioContext {
    currentTime = 0;
    close() { return Promise.resolve(); }
    createOscillator() {
      return {
        type: 'sine',
        frequency: { value: 0 },
        connect() {},
        start() {},
        stop() {},
        onended: null as null | (() => void),
      };
    }
    createGain() {
      return {
        gain: { value: 0 },
        connect() {},
      };
    }
    createMediaStreamSource() { return { connect() {}, disconnect() {} }; }
    createMediaStreamDestination() { return { stream: new MediaStream(), connect() {}, disconnect() {} }; }
    createBiquadFilter() { return { type: 'lowpass', frequency: { value: 0 }, connect() {}, disconnect() {} }; }
    createDynamicsCompressor() { return { threshold: { value: 0 }, knee: { value: 0 }, ratio: { value: 0 }, attack: { value: 0 }, release: { value: 0 }, connect() {}, disconnect() {} }; }
    createAnalyser() {
      return {
        fftSize: 0,
        connect() {},
        disconnect() {},
        getByteTimeDomainData(data: Uint8Array) { data.fill(128); },
      };
    }
  };
}
