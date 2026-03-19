import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { ProtectedRoute } from '@/components/Auth/ProtectedRoute';
import { LoadingSpinner } from '@/components/Common/LoadingSpinner';

const Login = lazy(() => import('@/pages/Login').then((m) => ({ default: m.Login })));
const Signup = lazy(() => import('@/pages/Signup').then((m) => ({ default: m.Signup })));
const ChatPage = lazy(() => import('@/pages/ChatPage').then((m) => ({ default: m.ChatPage })));

export function App() {
  const { isAuthenticated } = useAuthStore();

  return (
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
        </Routes>
      </Suspense>
    </Router>
  );
}
