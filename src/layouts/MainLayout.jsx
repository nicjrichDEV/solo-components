export default function Layout({ children }) {
  // Main container spans whole screen on mobile
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[256px_1fr]">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:bg-red-500"></aside>

      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
