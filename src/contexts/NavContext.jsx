import { createContext, useContext, useEffect, useState } from "react";

const NavContext = createContext(null);

export function NavProvider({ mobileRef, children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOverlay, setSidebarOverlay] = useState(false);

  useEffect(() => {
    function handleOutOfBounds(event) {
      if (
        !mobileRef.current?.contains(event.target) ||
        event.target.tagName === "A"
      ) {
        if (mobileOpen) toggleMobile();
        if (sidebarOverlay) toggleSidebar();
      }
    }

    if (mobileOpen || sidebarOverlay)
      document.addEventListener("click", handleOutOfBounds);

    return () => document.removeEventListener("click", handleOutOfBounds);
  }, [mobileOpen, sidebarOverlay, mobileRef]);

  function toggleMobile() {
    setMobileOpen((prev) => !prev);
  }

  function toggleSidebar() {
    setSidebarOverlay((prev) => !prev);
  }

  const value = {
    mobileOpen,
    sidebarOverlay,
    mobileRef,
    setMobileOpen,
    setSidebarOverlay,
    toggleMobile,
    toggleSidebar,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export function useNav() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used inside a NavProvider");
  }
  return context;
}
