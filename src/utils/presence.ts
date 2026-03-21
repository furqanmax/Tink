export type PresenceStatus = 'online' | 'offline' | 'busy';

const ONLINE_THRESHOLD_MS = 2 * 60 * 1000;

export function normalizeTimestampToMillis(value: unknown): number {
  if (!value) return 0;
  if (typeof value === 'number') return value;
  if (value instanceof Date) return value.getTime();

  if (
    typeof value === 'object' &&
    value !== null &&
    'toMillis' in value &&
    typeof (value as any).toMillis === 'function'
  ) {
    return (value as any).toMillis();
  }

  return 0;
}

export function derivePresenceStatus(input: {
  status: unknown;
  lastSeen: unknown;
  nowMs?: number;
}): PresenceStatus {
  const nowMs = input.nowMs ?? Date.now();
  const lastSeenMs = normalizeTimestampToMillis(input.lastSeen);

  if (!lastSeenMs) return 'offline';

  const isFresh = nowMs - lastSeenMs <= ONLINE_THRESHOLD_MS;
  if (!isFresh) return 'offline';

  if (input.status === 'busy') return 'busy';
  return 'online';
}
