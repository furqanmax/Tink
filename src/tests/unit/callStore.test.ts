import { beforeEach, describe, expect, it, vi } from 'vitest';

const hoisted = vi.hoisted(() => {
  let querySnapshotHandler: ((snapshot: any) => void | Promise<void>) | null = null;
  let docSnapshotHandler: ((snapshot: any) => void | Promise<void>) | null = null;

  const mockAuth = {
    currentUser: {
      uid: 'caller-1',
      displayName: 'Caller One',
      email: 'caller@example.com',
    },
  };

  const mockCollection = vi.fn((...args: any[]) => ({ __type: 'collection', args }));
  const mockDoc = vi.fn((...args: any[]) => ({ __type: 'doc', args }));
  const mockQuery = vi.fn((...args: any[]) => ({ __type: 'query', args }));
  const mockWhere = vi.fn((...args: any[]) => ({ __type: 'where', args }));
  const mockAddDoc = vi.fn();
  const mockUpdateDoc = vi.fn();
  const mockGetDoc = vi.fn();
  const mockOnSnapshot = vi.fn((ref: any, cb: any) => {
    if (ref?.__type === 'query') {
      querySnapshotHandler = cb;
    } else {
      docSnapshotHandler = cb;
    }
    return vi.fn();
  });
  const mockServerTimestamp = vi.fn(() => ({ __serverTimestamp: true }));
  const mockSendNotificationCallable = vi.fn().mockResolvedValue({ data: { success: true } });
  const mockHttpsCallable = vi.fn(() => mockSendNotificationCallable);

  const liveKitService = {
    connectToRoom: vi.fn().mockResolvedValue({ remoteParticipants: new Map() }),
    enableAudioProcessing: vi.fn().mockResolvedValue(undefined),
    disableAudioProcessing: vi.fn().mockResolvedValue(undefined),
    disconnect: vi.fn().mockResolvedValue(undefined),
    toggleAudio: vi.fn().mockResolvedValue(undefined),
    toggleVideo: vi.fn().mockResolvedValue(undefined),
    onParticipantConnected: vi.fn(),
    onParticipantDisconnected: vi.fn(),
    onConnectionStateChanged: vi.fn(),
    onDisconnected: vi.fn(),
  };

  const jitsiService = {
    joinRoom: vi.fn().mockResolvedValue(undefined),
    leaveRoom: vi.fn().mockResolvedValue(undefined),
    toggleAudio: vi.fn().mockResolvedValue(undefined),
    toggleVideo: vi.fn().mockResolvedValue(undefined),
    isActive: vi.fn().mockReturnValue(false),
  };

  return {
    mockAuth,
    mockCollection,
    mockDoc,
    mockQuery,
    mockWhere,
    mockAddDoc,
    mockUpdateDoc,
    mockGetDoc,
    mockOnSnapshot,
    mockServerTimestamp,
    mockHttpsCallable,
    mockSendNotificationCallable,
    liveKitService,
    jitsiService,
    getQuerySnapshotHandler: () => querySnapshotHandler,
    getDocSnapshotHandler: () => docSnapshotHandler,
  };
});

vi.mock('@/config/firebase', () => ({
  auth: hoisted.mockAuth,
  firestore: { _mock: true },
  functions: { _mock: true },
}));

vi.mock('firebase/firestore', () => ({
  collection: hoisted.mockCollection,
  doc: hoisted.mockDoc,
  query: hoisted.mockQuery,
  where: hoisted.mockWhere,
  addDoc: hoisted.mockAddDoc,
  updateDoc: hoisted.mockUpdateDoc,
  getDoc: hoisted.mockGetDoc,
  onSnapshot: hoisted.mockOnSnapshot,
  serverTimestamp: hoisted.mockServerTimestamp,
}));

vi.mock('firebase/functions', () => ({
  httpsCallable: hoisted.mockHttpsCallable,
}));

vi.mock('@/services/livekit', () => ({
  liveKitService: hoisted.liveKitService,
}));

vi.mock('@/services/jitsi', () => ({
  jitsiService: hoisted.jitsiService,
}));

import { useCallStore } from '@/store/callStore';

async function flushMicrotasks() {
  await Promise.resolve();
  await Promise.resolve();
}

describe('callStore', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    hoisted.mockAuth.currentUser = {
      uid: 'caller-1',
      displayName: 'Caller One',
      email: 'caller@example.com',
    };
    useCallStore.getState().cleanup();
    useCallStore.setState({
      callState: 'idle',
      currentCall: null,
      isIncomingCall: false,
      incomingCallData: null,
      activeCallId: null,
      error: null,
    });
    hoisted.mockGetDoc.mockResolvedValue({
      exists: () => true,
      data: () => ({ status: 'accepted' }),
    });
  });

  it('creates outgoing call session and moves to ringing', async () => {
    hoisted.mockAddDoc.mockResolvedValue({ id: 'call-1' });

    await useCallStore.getState().initiateCall('callee-1', 'Callee One', true);

    expect(hoisted.mockAddDoc).toHaveBeenCalledTimes(1);
    expect(useCallStore.getState().callState).toBe('ringing');
    expect(useCallStore.getState().activeCallId).toBe('call-1');
  });

  it('sends call notification fallback payload when initiating a call', async () => {
    hoisted.mockAddDoc.mockResolvedValue({ id: 'call-42' });

    await useCallStore.getState().initiateCall('callee-42', 'Callee Two', false);
    await flushMicrotasks();

    expect(hoisted.mockHttpsCallable).toHaveBeenCalledWith({ _mock: true }, 'sendNotification');
    expect(hoisted.mockSendNotificationCallable).toHaveBeenCalledWith(
      expect.objectContaining({
        recipientId: 'callee-42',
        type: 'call',
        data: expect.objectContaining({
          callId: 'call-42',
          callerId: 'caller-1',
          isVideo: '0',
        }),
      })
    );
  });

  it('shows incoming ringing call from listener', async () => {
    useCallStore.getState().initializeIncomingCallListener();
    const handler = hoisted.getQuerySnapshotHandler();
    expect(handler).toBeTruthy();

    await handler!({
      empty: false,
      docs: [
        {
          id: 'incoming-1',
          data: () => ({
            callerId: 'caller-2',
            callerName: 'Caller Two',
            roomName: 'caller-2_receiver-1',
            isVideo: false,
            createdAt: { toMillis: () => Date.now() },
          }),
        },
      ],
    });
    await flushMicrotasks();

    expect(useCallStore.getState().isIncomingCall).toBe(true);
    expect(useCallStore.getState().incomingCallData?.callId).toBe('incoming-1');
  });

  it('rejects incoming call and updates call session', async () => {
    useCallStore.setState({
      isIncomingCall: true,
      incomingCallData: {
        callId: 'incoming-2',
        callerId: 'caller-2',
        callerName: 'Caller Two',
        roomName: 'caller-2_receiver-1',
        isVideo: true,
      },
      callState: 'ringing',
    });

    await useCallStore.getState().rejectIncomingCall();

    expect(hoisted.mockUpdateDoc).toHaveBeenCalledTimes(1);
    expect(useCallStore.getState().isIncomingCall).toBe(false);
    expect(useCallStore.getState().callState).toBe('idle');
  });

  it('marks new incoming call as busy when already connected', async () => {
    useCallStore.setState({ callState: 'connected', isIncomingCall: false });

    await useCallStore.getState().handleIncomingCall({
      callId: 'incoming-busy',
      callerId: 'caller-3',
      callerName: 'Caller Three',
      roomName: 'caller-3_receiver-1',
      isVideo: true,
    });

    expect(hoisted.mockUpdateDoc).toHaveBeenCalledTimes(1);
    expect(useCallStore.getState().isIncomingCall).toBe(false);
  });
});
