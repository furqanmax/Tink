import { doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { firestore } from '@/config/firebase';

const HEARTBEAT_MS = 60_000;

async function setPresence(userId: string, status: 'online' | 'offline') {
  await updateDoc(doc(firestore, 'users', userId), {
    status,
    lastSeen: serverTimestamp(),
  });
}

export function startPresence(userId: string) {
  let stopped = false;

  const safeSetPresence = async (status: 'online' | 'offline') => {
    if (stopped) return;
    try {
      await setPresence(userId, status);
    } catch {
      // ignore
    }
  };

  void safeSetPresence('online');

  const onVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      void safeSetPresence('online');
    } else {
      void safeSetPresence('offline');
    }
  };

  const onFocus = () => void safeSetPresence('online');
  const onBlur = () => void safeSetPresence('offline');

  const onBeforeUnload = () => {
    void safeSetPresence('offline');
  };

  document.addEventListener('visibilitychange', onVisibilityChange);
  window.addEventListener('focus', onFocus);
  window.addEventListener('blur', onBlur);
  window.addEventListener('beforeunload', onBeforeUnload);

  const intervalId = window.setInterval(() => {
    if (document.visibilityState === 'visible') {
      void safeSetPresence('online');
    }
  }, HEARTBEAT_MS);

  return () => {
    void safeSetPresence('offline');
    stopped = true;
    window.clearInterval(intervalId);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    window.removeEventListener('focus', onFocus);
    window.removeEventListener('blur', onBlur);
    window.removeEventListener('beforeunload', onBeforeUnload);
  };
}
