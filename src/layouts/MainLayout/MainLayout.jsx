import { createContext, useEffect, useRef, useState } from "react";
import MobileNav from "../../internalComponents/nav/MobileNav";
import MobileNavExpanded from "../../internalComponents/nav/MobileNavExpanded";
import SideNav from "../../internalComponents/nav/SideNav";
import "./MainLayout.css";

const NavContext = createContext(null);

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
    <NavContext.Provider value={{ mobileOpen, toggleMobile }}>
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

        <main className="main">
          <div className="safe-area">{children}</div>
        </main>
      </div>
    </NavContext.Provider>
  );
}

export { NavContext };
