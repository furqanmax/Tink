import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { LoadingSpinner } from '@/components/Common/LoadingSpinner';
import { ErrorBoundary } from '@/components/Common/ErrorBoundary';
import { requestFCMToken } from '@/config/firebase';

const Login = lazy(() => import('@/pages/Login').then((m) => ({ default: m.Login })));
const Signup = lazy(() => import('@/pages/Signup').then((m) => ({ default: m.Signup })));
const ChatPage = lazy(() => import('@/pages/ChatPage').then((m) => ({ default: m.ChatPage })));

export function App() {
  const { isAuthenticated, user, updateStatus, initialized, updateFCMToken } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated || !user) return;

    // Request FCM Token for notifications
    const setupNotifications = async () => {
      try {
        const token = await requestFCMToken();
        if (token) {
          await updateFCMToken(token);
        }
      } catch (error) {
        console.error('Failed to setup notifications:', error);
      }
    };

    setupNotifications();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        updateStatus('online');
      } else {
        updateStatus('busy');
      }
    };

    const handleBeforeUnload = () => {
      updateStatus('offline');
    };

    window.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Initial status set
    updateStatus('online');

    return () => {
      window.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isAuthenticated, user, updateStatus]);

  if (!initialized) {
    return <LoadingSpinner />;
  }

  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route 
              path="/" 
              element={isAuthenticated ? <ChatPage /> : <Login />} 
            />
            <Route 
              path="/signup" 
              element={isAuthenticated ? <Navigate to="/" /> : <Signup />} 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}
