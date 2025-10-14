import { Globe, Menu, X } from "lucide-react";
import CONSTANTS from "../../../utils/constants";
import "./MobileNav.css";
import { useTheme } from "../../../contexts/ThemeContext";
import LogoLight from "../../../assets/pmi-small-light.svg";
import LogoDark from "../../../assets/pmi-small-dark.svg";
import { useNav } from "../../../contexts/NavContext.jsx";

export default function MobileNav({ toggleMobile, toggleSidebar }) {
  const { theme } = useTheme();
  const { mobileOpen, sidebarOverlay } = useNav();

  function handleMenuClick() {
    if (typeof window === "undefined") return;

    const isTablet = window.matchMedia(
      "(min-width: 640px) and (max-width: 1023px)",
    ).matches;

    if (isTablet) {
      toggleSidebar();
    } else {
      toggleMobile();
    }
  }

  return (
    <div className="mobile-nav-root">
      <a className="start-container" target="_blank" href={CONSTANTS.PMI}>
        <Globe size={"16px"} />
      </a>
      <img
        src={theme === "light" ? LogoLight : LogoDark}
        className="logo"
        alt="PMI Standalone Logo"
      />
      <button onClick={handleMenuClick} className="end-container">
        {mobileOpen || sidebarOverlay ? (
          <X size={"16px"} />
        ) : (
          <Menu size={"16px"} />
        )}
      </button>
    </div>
  );
}
