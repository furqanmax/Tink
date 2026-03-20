import { beforeEach, describe, expect, it, vi } from 'vitest';

const hoisted = vi.hoisted(() => ({
  mockAuth: {
    currentUser: {
      uid: 'user-a',
      displayName: 'Alice',
      email: 'alice@example.com',
    },
  },
  mockCollection: vi.fn(),
  mockQuery: vi.fn(),
  mockWhere: vi.fn(),
  mockOrderBy: vi.fn(),
  mockOnSnapshot: vi.fn(),
  mockAddDoc: vi.fn(),
  mockDoc: vi.fn(),
  mockUpdateDoc: vi.fn(),
  mockDeleteDoc: vi.fn(),
  mockGetDocs: vi.fn(),
  mockServerTimestamp: vi.fn(() => ({ __serverTimestamp: true })),
  mockWriteBatch: vi.fn(),
  mockArrayUnion: vi.fn((value: string) => ({ __arrayUnion: value })),
  mockArrayRemove: vi.fn((value: string) => ({ __arrayRemove: value })),
  mockSetDoc: vi.fn(),
  mockGetDoc: vi.fn(),
}));

vi.mock('@/config/firebase', () => ({
  firestore: { _mock: true },
  auth: hoisted.mockAuth,
}));

vi.mock('@/services/notification', () => ({
  notificationService: {
    notifyFriendRequest: vi.fn(),
  },
}));

vi.mock('firebase/firestore', () => ({
  collection: hoisted.mockCollection,
  query: hoisted.mockQuery,
  where: hoisted.mockWhere,
  orderBy: hoisted.mockOrderBy,
  onSnapshot: hoisted.mockOnSnapshot,
  addDoc: hoisted.mockAddDoc,
  doc: hoisted.mockDoc,
  updateDoc: hoisted.mockUpdateDoc,
  deleteDoc: hoisted.mockDeleteDoc,
  getDocs: hoisted.mockGetDocs,
  serverTimestamp: hoisted.mockServerTimestamp,
  writeBatch: hoisted.mockWriteBatch,
  arrayUnion: hoisted.mockArrayUnion,
  arrayRemove: hoisted.mockArrayRemove,
  setDoc: hoisted.mockSetDoc,
  getDoc: hoisted.mockGetDoc,
}));

import { useFriendRequestStore } from '@/store/friendRequestStore';

function mockDocSnapshot(data: any, exists = true) {
  return {
    exists: () => exists,
    data: () => data,
  };
}

function mockQuerySnapshot(docs: Array<{ id?: string; data?: any }>) {
  return {
    empty: docs.length === 0,
    docs: docs.map((item, index) => ({
      id: item.id || `doc-${index}`,
      data: () => item.data || {},
    })),
  };
}

describe('friendRequestStore', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    hoisted.mockAuth.currentUser = {
      uid: 'user-a',
      displayName: 'Alice',
      email: 'alice@example.com',
    };

    hoisted.mockCollection.mockReturnValue({ _collection: true });
    hoisted.mockQuery.mockImplementation((...args: any[]) => ({ args }));
    hoisted.mockWhere.mockImplementation((...args: any[]) => ({ args }));
    hoisted.mockOrderBy.mockImplementation((...args: any[]) => ({ args }));
    hoisted.mockDoc.mockImplementation((_firestore: any, path: string, id: string) => ({ path, id }));

    const update = vi.fn();
    const commit = vi.fn().mockResolvedValue(undefined);
    hoisted.mockWriteBatch.mockReturnValue({ update, commit });

    useFriendRequestStore.setState({
      incomingRequests: [],
      outgoingRequests: [],
      loading: false,
      error: null,
      unsubscribers: [],
    });
  });

  it('blocks sending a request when recipient already sent one', async () => {
    hoisted.mockGetDoc
      .mockResolvedValueOnce(mockDocSnapshot({ friends: [] })) // current user
      .mockResolvedValueOnce(mockDocSnapshot({ blockedUsers: [] })); // recipient
    hoisted.mockGetDocs
      .mockResolvedValueOnce(mockQuerySnapshot([])) // sent pending
      .mockResolvedValueOnce(mockQuerySnapshot([{ id: 'incoming-1', data: { status: 'pending' } }])); // received pending

    await expect(
      useFriendRequestStore.getState().sendFriendRequest('user-b', 'Bob')
    ).rejects.toThrow('already sent you a request');
    expect(hoisted.mockAddDoc).not.toHaveBeenCalled();
  });

  it('rejects accepting a request when current user is not recipient', async () => {
    hoisted.mockAuth.currentUser = {
      uid: 'user-c',
      displayName: 'Carol',
      email: 'carol@example.com',
    };
    hoisted.mockGetDoc.mockResolvedValueOnce(mockDocSnapshot({
      senderId: 'user-a',
      recipientId: 'user-b',
      senderName: 'Alice',
      recipientName: 'Bob',
      status: 'pending',
    }));

    await expect(
      useFriendRequestStore.getState().acceptFriendRequest('request-1')
    ).rejects.toThrow('Not authorized to accept this request');
  });

  it('rejects cancel when request is not owned by sender', async () => {
    hoisted.mockGetDoc.mockResolvedValueOnce(mockDocSnapshot({
      senderId: 'user-b',
      recipientId: 'user-a',
      status: 'pending',
    }));

    await expect(
      useFriendRequestStore.getState().cancelFriendRequest('request-1')
    ).rejects.toThrow('Not authorized to cancel this request');
    expect(hoisted.mockDeleteDoc).not.toHaveBeenCalled();
  });

  it('cleans up previous subscriptions before re-subscribing', () => {
    const unsubIncoming1 = vi.fn();
    const unsubOutgoing1 = vi.fn();
    const unsubIncoming2 = vi.fn();
    const unsubOutgoing2 = vi.fn();
    hoisted.mockOnSnapshot
      .mockReturnValueOnce(unsubIncoming1)
      .mockReturnValueOnce(unsubOutgoing1)
      .mockReturnValueOnce(unsubIncoming2)
      .mockReturnValueOnce(unsubOutgoing2);

    useFriendRequestStore.getState().loadFriendRequests();
    useFriendRequestStore.getState().loadFriendRequests();

    expect(unsubIncoming1).toHaveBeenCalledTimes(1);
    expect(unsubOutgoing1).toHaveBeenCalledTimes(1);
    expect(useFriendRequestStore.getState().unsubscribers).toEqual([unsubIncoming2, unsubOutgoing2]);
  });

  it('unfriends by removing both sides and deleting conversation', async () => {
    const deleteDocInBatch = vi.fn();
    const update = vi.fn();
    const commit = vi.fn().mockResolvedValue(undefined);
    hoisted.mockWriteBatch.mockReturnValueOnce({ update, delete: deleteDocInBatch, commit });

    await useFriendRequestStore.getState().unfriendUser('user-b');

    expect(hoisted.mockArrayRemove).toHaveBeenCalledWith('user-b');
    expect(hoisted.mockArrayRemove).toHaveBeenCalledWith('user-a');
    expect(update).toHaveBeenCalledTimes(2);
    expect(deleteDocInBatch).toHaveBeenCalledTimes(1);
    expect(commit).toHaveBeenCalledTimes(1);
  });

  it('blocks user and clears relationship + pending requests', async () => {
    const cleanupDelete = vi.fn();
    const cleanupUpdate = vi.fn();
    const cleanupCommit = vi.fn().mockResolvedValue(undefined);
    const relationshipDelete = vi.fn();
    const relationshipUpdate = vi.fn();
    const relationshipCommit = vi.fn().mockResolvedValue(undefined);
    hoisted.mockWriteBatch
      .mockReturnValueOnce({ delete: cleanupDelete, update: cleanupUpdate, commit: cleanupCommit })
      .mockReturnValueOnce({ delete: relationshipDelete, update: relationshipUpdate, commit: relationshipCommit });

    const pendingSentRef = { id: 'r1' };
    const pendingIncomingRef = { id: 'r2' };
    hoisted.mockGetDocs
      .mockResolvedValueOnce({ docs: [{ ref: pendingSentRef }] })
      .mockResolvedValueOnce({ docs: [{ ref: pendingIncomingRef }] });

    await useFriendRequestStore.getState().blockUser('user-b');

    expect(cleanupDelete).toHaveBeenCalledWith(pendingSentRef);
    expect(cleanupUpdate).toHaveBeenCalledTimes(1);
    expect(hoisted.mockArrayUnion).toHaveBeenCalledWith('user-b');
    expect(hoisted.mockArrayRemove).toHaveBeenCalledWith('user-b');
    expect(hoisted.mockArrayRemove).toHaveBeenCalledWith('user-a');
    expect(relationshipDelete).toHaveBeenCalledTimes(1);
    expect(relationshipCommit).toHaveBeenCalledTimes(1);
  });
});
