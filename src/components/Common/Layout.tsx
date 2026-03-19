import { useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  useEffect(() => {
    const updateAppHeight = () => {
      const height = window.visualViewport?.height ?? window.innerHeight;
      document.documentElement.style.setProperty('--app-height', `${height}px`);
    };

    updateAppHeight();

    window.addEventListener('resize', updateAppHeight);
    window.addEventListener('orientationchange', updateAppHeight);
    window.visualViewport?.addEventListener('resize', updateAppHeight);
    window.visualViewport?.addEventListener('scroll', updateAppHeight);

    return () => {
      window.removeEventListener('resize', updateAppHeight);
      window.removeEventListener('orientationchange', updateAppHeight);
      window.visualViewport?.removeEventListener('resize', updateAppHeight);
      window.visualViewport?.removeEventListener('scroll', updateAppHeight);
    };
  }, []);

  return (
    <div
      className="min-h-screen min-h-[100dvh] bg-gray-100"
      style={{ minHeight: 'var(--app-height, 100dvh)' }}
    >
      <main className="h-full flex flex-col">
        {children}
      </main>
    </div>
  );
}
