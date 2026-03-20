type JitsiApi = any;

declare global {
  interface Window {
    JitsiMeetExternalAPI?: new (domain: string, options: Record<string, any>) => JitsiApi;
  }
}

const DEFAULT_DOMAIN = import.meta.env.VITE_JITSI_DOMAIN || 'meet.jit.si';
const EXTERNAL_API_PATH = '/external_api.js';

class JitsiService {
  private api: JitsiApi | null = null;
  private loadingPromise: Promise<void> | null = null;
  private audioEnabled = true;
  private videoEnabled = true;

  private async loadExternalApi(domain: string): Promise<void> {
    if (window.JitsiMeetExternalAPI) return;
    if (this.loadingPromise) return this.loadingPromise;

    this.loadingPromise = new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://${domain}${EXTERNAL_API_PATH}`;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Jitsi external API'));
      document.head.appendChild(script);
    });

    return this.loadingPromise;
  }

  async joinRoom(
    roomName: string,
    displayName: string,
    parentNode: HTMLElement,
    options?: { domain?: string; audioOnly?: boolean }
  ): Promise<void> {
    const domain = options?.domain || DEFAULT_DOMAIN;
    await this.loadExternalApi(domain);

    if (!window.JitsiMeetExternalAPI) {
      throw new Error('Jitsi API unavailable');
    }

    if (this.api) {
      this.api.dispose();
      this.api = null;
    }

    this.api = new window.JitsiMeetExternalAPI(domain, {
      roomName,
      parentNode,
      userInfo: { displayName },
      configOverwrite: {
        prejoinPageEnabled: false,
        prejoinConfig: {
          enabled: false,
          hideDisplayName: true,
        },
        startWithAudioMuted: false,
        startWithVideoMuted: !!options?.audioOnly,
        disableDeepLinking: true,
        disableModeratorIndicator: true,
        toolbarButtons: [],
        notifications: [],
        disableJoinLeaveSounds: true,
        hideConferenceSubject: true,
        hideConferenceTimer: true,
      },
      interfaceConfigOverwrite: {
        MOBILE_APP_PROMO: false,
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
        DISPLAY_WATERMARK_FOR_GUESTS: false,
        SHOW_BRAND_WATERMARK: false,
        DEFAULT_LOGO_URL: '',
        JITSI_WATERMARK_LINK: '',
        BRAND_WATERMARK_LINK: '',
        TOOLBAR_BUTTONS: [],
        SETTINGS_SECTIONS: [],
        SHOW_POWERED_BY: false,
        HIDE_INVITE_MORE_HEADER: true,
        VIDEO_LAYOUT_FIT: 'both',
      },
    });
    this.audioEnabled = true;
    this.videoEnabled = !options?.audioOnly;
  }

  async leaveRoom(): Promise<void> {
    if (this.api) {
      this.api.dispose();
      this.api = null;
    }
    this.audioEnabled = true;
    this.videoEnabled = true;
  }

  async toggleAudio(enabled: boolean): Promise<void> {
    if (!this.api) return;
    if (this.audioEnabled !== enabled) {
      this.api.executeCommand('toggleAudio');
      this.audioEnabled = enabled;
    }
  }

  async toggleVideo(enabled: boolean): Promise<void> {
    if (!this.api) return;
    if (this.videoEnabled !== enabled) {
      this.api.executeCommand('toggleVideo');
      this.videoEnabled = enabled;
    }
  }

  isActive(): boolean {
    return !!this.api;
  }
}

export const jitsiService = new JitsiService();
