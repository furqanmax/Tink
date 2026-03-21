import { AlertTriangle, Home, RefreshCcw, WifiOff, ShieldAlert, FileSearch } from 'lucide-react';

interface ErrorPageProps {
  code: string;
  title: string;
  description: string;
  icon?: 'timeout' | 'offline' | 'forbidden' | 'notfound' | 'general';
  onRetry?: () => void;
}

export function ErrorPage({ code, title, description, icon = 'general', onRetry }: ErrorPageProps) {
  const renderIcon = () => {
    switch (icon) {
      case 'timeout':
        return <AlertTriangle className="w-16 h-16 text-yellow-500" />;
      case 'offline':
        return <WifiOff className="w-16 h-16 text-gray-500" />;
      case 'forbidden':
        return <ShieldAlert className="w-16 h-16 text-red-500" />;
      case 'notfound':
        return <FileSearch className="w-16 h-16 text-blue-500" />;
      default:
        return <AlertTriangle className="w-16 h-16 text-red-500" />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-6 py-12">
      <div className="text-center max-w-xl">
        <div className="flex justify-center mb-8">
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl shadow-sm">
            {renderIcon()}
          </div>
        </div>
        
        <h1 className="text-6xl font-black text-gray-200 dark:text-gray-800 mb-4 tracking-tighter">
          {code}
        </h1>
        
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {title}
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {onRetry && (
            <button
              onClick={onRetry}
              className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all active:scale-95 shadow-lg shadow-blue-500/25"
            >
              <RefreshCcw className="w-5 h-5" />
              Try Again
            </button>
          )}
          <a
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-200 font-semibold rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all active:scale-95 shadow-sm"
          >
            <Home className="w-5 h-5" />
            Back to Dashboard
          </a>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-900">
          <p className="text-sm text-gray-400 dark:text-gray-600 font-medium">
            Tink Security & Messaging Protocol • 2026
          </p>
        </div>
      </div>
    </div>
  );
}

// Specialized Error Components
export const TimeoutError = () => (
  <ErrorPage
    code="504"
    title="Gateway Timeout"
    description="The server took too long to respond. This might be due to a slow connection or high server load. Please check your internet and try again."
    icon="timeout"
    onRetry={() => window.location.reload()}
  />
);

export const ForbiddenError = () => (
  <ErrorPage
    code="403"
    title="Access Denied"
    description="You don't have permission to access this resource. Please make sure you are logged in with the correct account."
    icon="forbidden"
  />
);

export const NotFoundError = () => (
  <ErrorPage
    code="404"
    title="Page Not Found"
    description="The page you are looking for doesn't exist or has been moved. Check the URL and try again."
    icon="notfound"
  />
);

export const OfflineError = () => (
  <ErrorPage
    code="OFFLINE"
    title="No Internet Connection"
    description="You are currently offline. Tink requires an active internet connection to sync your encrypted messages."
    icon="offline"
    onRetry={() => window.location.reload()}
  />
);
