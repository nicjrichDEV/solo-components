import { useEffect, useRef, useState } from "react";
import MobileNavExpanded from "../components/nav/MobileNavExpanded";
import MobileNav from "../components/nav/MobileNav";
import SideNav from "../components/nav/SideNav";
import "./MainLayout.css";

export default function MainLayout({ children }) {
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
    <div className="app-shell">
      {/* Desktop Sidebar */}
      <SideNav />

      {/* Mobile */}
      <nav className="mobile-nav-container" ref={mobileNavRef}>
        {/* Fixed top bar */}
        <MobileNav toggleMobile={toggleMobile} />
        {/* Mobile Expand Down */}
        <MobileNavExpanded mobileOpen={mobileOpen} />
      </nav>

      <main className="main">{children}</main>
    </div>
  );
}
