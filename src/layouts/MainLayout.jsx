import { useEffect, useRef, useState } from "react";
import MobileNavExpanded from "../components/nav/MobileNavExpanded";
import MobileNav from "../components/nav/MobileNav";
import SideNav from "../components/nav/SideNav";

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileNavRef = useRef();

  useEffect(() => {
    function handleOutOfBounds(event) {
      if (
        !mobileNavRef.current.contains(event.target) ||
        event.target.tagName === "A"
      )
        toggleMobile();
    }

    if (mobileOpen) document.addEventListener("click", handleOutOfBounds);

    return () => document.removeEventListener("click", handleOutOfBounds);
  }, [mobileOpen]);

  function toggleMobile() {
    setMobileOpen((v) => !v);
  }

  return (
    <div className="flex h-screen max-h-screen min-h-screen flex-col overflow-hidden lg:grid lg:grid-cols-[256px_1fr]">
      {/* Desktop Sidebar */}
      <SideNav />

      {/* Mobile */}
      <nav className="lg:hidden" ref={mobileNavRef}>
        {/* Fixed top bar */}
        <MobileNav toggleMobile={toggleMobile} />
        {/* Mobile Expand Down */}
        <MobileNavExpanded mobileOpen={mobileOpen} />
      </nav>

      <main className="flex flex-1 flex-col items-center overflow-y-auto scroll-smooth bg-neutral-100 p-2 lg:p-6">
        {children}
      </main>
    </div>
  );
}
