import { useRef, useState } from "react";

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileNavRef = useRef();

  function toggleMobile() {
    setMobileOpen((v) => !v);
  }

  return (
    <div className="flex min-h-screen flex-col lg:grid lg:grid-cols-[256px_1fr]">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:bg-red-500"></aside>

      {/* Mobile */}
      <nav className="lg:hidden" ref={mobileNavRef}>
        {/* Fixed top bar */}
        <div className="fixed top-0 right-0 left-0 z-10 grid h-10 grid-cols-[40px_1fr_40px] border-b border-b-neutral-200 bg-white">
          <button
            onClick={toggleMobile}
            className="border-r border-r-neutral-200"
          ></button>
          <div className="flex items-center justify-center">
            <h2 className="font-mono">UI Next</h2>
          </div>
          <div className="border-l border-l-neutral-200"></div>
        </div>
        {/* Mobile Expand Down */}
        <div
          className={`${mobileOpen ? "min-h-64 border-b border-b-neutral-200 shadow-2xl" : "min-h-0 border-b-0 border-b-neutral-200 shadow"} fixed top-10 right-0 left-0 bg-white transition-all duration-300`}
        ></div>
      </nav>

      <main className="flex-1 bg-neutral-100 p-4">{children}</main>
    </div>
  );
}
