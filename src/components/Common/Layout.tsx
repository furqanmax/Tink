interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-gray-100">
      <main className="h-full flex flex-col">
        {children}
      </main>
    </div>
  );
}
