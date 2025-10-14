import MobileNav from "../../internalComponents/nav/MobileNav";
import MobileNavExpanded from "../../internalComponents/nav/MobileNavExpanded";
import SideNav from "../../internalComponents/nav/SideNav";
import cn from "../../utils/cn";
import "./MainLayout.css";
import { Outlet } from "react-router";
import { NavProvider, useNav } from "../../contexts/NavContext.jsx";
import { useRef } from "react";

// TODO: Refactor NavContext under contexts folder

export default function MainLayout() {
  const mobileNavRef = useRef(null);
  return (
    <NavProvider mobileRef={mobileNavRef}>
      <MainLayoutContent />
    </NavProvider>
  );
}

function MainLayoutContent() {
  const { mobileOpen, sidebarOverlay, mobileRef, toggleMobile, toggleSidebar } =
    useNav();

  return (
    <div className="main-layout__shell">
      {/* Desktop Sidebar */}
      <SideNav />

      {/* Mobile */}
      <nav className="main-layout__mobile-nav" ref={mobileRef}>
        {/* Fixed top bar */}
        <MobileNav toggleMobile={toggleMobile} toggleSidebar={toggleSidebar} />
        {/* Mobile Expand Down */}
        <MobileNavExpanded mobileOpen={mobileOpen} />
      </nav>

      <main
        className={cn(
          "main-layout__main",
          sidebarOverlay && "main-layout__main--overlay",
        )}
      >
        <Outlet />
      </main>
    </div>
  );
}
