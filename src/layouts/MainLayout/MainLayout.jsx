import { createContext, useEffect, useRef, useState } from "react";
import MobileNav from "../../internalComponents/nav/MobileNav";
import MobileNavExpanded from "../../internalComponents/nav/MobileNavExpanded";
import SideNav from "../../internalComponents/nav/SideNav";
import cn from "../../utils/cn";
import "./MainLayout.css";

const NavContext = createContext(null);

export default function MainLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOverlay, setSidebarOverlay] = useState(false);
  const mobileNavRef = useRef();
  const sidebarRef = useRef;

  useEffect(() => {
    function handleOutOfBounds(event) {
      if (
        !mobileNavRef.current.contains(event.target) ||
        event.target.tagName === "A"
      ) {
        if (mobileOpen) toggleMobile();
        if (sidebarOverlay) toggleSidebar();
      }
    }

    if (mobileOpen || sidebarOverlay)
      document.addEventListener("click", handleOutOfBounds);

    return () => document.removeEventListener("click", handleOutOfBounds);
  }, [mobileOpen, sidebarOverlay]);

  function toggleMobile() {
    setMobileOpen((v) => !v);
  }

  function toggleSidebar() {
    setSidebarOverlay((last) => !last);
  }

  return (
    <NavContext.Provider
      value={{ mobileOpen, toggleMobile, sidebarOverlay, toggleSidebar }}
    >
      <div className="app-shell">
        {/* Desktop Sidebar */}
        <SideNav ref={sidebarRef} />

        {/* Mobile */}
        <nav className="mobile-nav-container" ref={mobileNavRef}>
          {/* Fixed top bar */}
          <MobileNav
            toggleMobile={toggleMobile}
            toggleSidebar={toggleSidebar}
          />
          {/* Mobile Expand Down */}
          <MobileNavExpanded mobileOpen={mobileOpen} />
        </nav>

        <main className={cn("main", sidebarOverlay && "overlay")}>
          <div className="safe-area">{children}</div>
        </main>
      </div>
    </NavContext.Provider>
  );
}

export { NavContext };
