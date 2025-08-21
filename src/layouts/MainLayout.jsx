export default function Layout({ children }) {
  // Main container spans whole screen on mobile
  return (
    <div className="flex min-h-screen flex-col lg:grid lg:grid-cols-[256px_1fr]">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:bg-red-500"></aside>

      {/* Mobile */}
      <nav className="lg:hidden">
        {/* Fixed top bar */}
        <div className="fixed top-0 right-0 left-0 z-10 grid h-10 grid-cols-[40px_1fr_40px] border-b border-b-neutral-200 bg-white">
          <button className="border-r border-r-neutral-200"></button>
          <div className="flex items-center justify-center">
            <h2 className="font-mono">UI Next</h2>
          </div>
          <div className="border-l border-l-neutral-200"></div>
        </div>
        {/* Mobile Expand Down */}
      </nav>

      <main className="flex-1 bg-neutral-100 p-4">{children}</main>
    </div>
  );
}
