import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { ProtectedRoute } from '@/components/Auth/ProtectedRoute';
import { LoadingSpinner } from '@/components/Common/LoadingSpinner';
import { ErrorBoundary } from '@/components/Common/ErrorBoundary';
import { NotFoundError } from '@/components/Common/ErrorPages';

const Login = lazy(() => import('@/pages/Login').then((m) => ({ default: m.Login })));
const Signup = lazy(() => import('@/pages/Signup').then((m) => ({ default: m.Signup })));
const ChatPage = lazy(() => import('@/pages/ChatPage').then((m) => ({ default: m.ChatPage })));

export function App() {
  const { isAuthenticated, user, updateStatus } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated || !user) return;

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

  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route 
              path="/login" 
              element={isAuthenticated ? <Navigate to="/chat" /> : <Login />} 
            />
            <Route 
              path="/signup" 
              element={isAuthenticated ? <Navigate to="/chat" /> : <Signup />} 
            />
            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <ChatPage />
                </ProtectedRoute>
              }
            />
            <Route 
              path="/" 
              element={<Navigate to={isAuthenticated ? '/chat' : '/login'} />} 
            />
            <Route path="*" element={<NotFoundError />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}
