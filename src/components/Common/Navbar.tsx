import { useState } from 'react';
import { User } from '@/types';
import { User as FirebaseUser } from 'firebase/auth';
import { Menu, X, LogOut, Settings, UserCircle } from 'lucide-react';

interface NavbarProps {
  user: FirebaseUser | null;
  userProfile: User | null;
  onLogout: () => void;
  children?: React.ReactNode;
}

export function Navbar({ user, userProfile, onLogout, children }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Video Chat</h1>
            <p className="text-xs text-gray-500">Secure PWA Messaging</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {children}
          {user && (
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-900">
                  {userProfile?.displayName || user.displayName || user.email}
                </p>
                <div className="flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${
                    userProfile?.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                  }`} />
                  <span className="text-xs text-gray-500 capitalize">
                    {userProfile?.status || 'offline'}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && user && (
        <div className="absolute right-4 top-16 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <div className="px-4 py-2 border-b border-gray-100 sm:hidden">
            <p className="font-medium text-gray-900">
              {userProfile?.displayName || user.displayName || user.email}
            </p>
          </div>
          
          <button
            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
          >
            <UserCircle className="w-4 h-4" />
            <span>Profile</span>
          </button>
          
          <button
            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
          >
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
          
          <div className="border-t border-gray-100 my-1" />
          
          <button
            onClick={() => {
              onLogout();
              setIsMenuOpen(false);
            }}
            className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </nav>
  );
}
