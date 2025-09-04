import { Globe, Menu, X } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../../App";
import LogoDark from "../../../assets/pmi-small-dark.svg";
import LogoLight from "../../../assets/pmi-small-light.svg";
import { NavContext } from "../../../layouts/MainLayout/MainLayout";
import CONSTANTS from "../../../utils/constants";
import "./MobileNav.css";

export default function MobileNav() {
  const context = useContext(NavContext);
  const theme = useContext(ThemeContext);
  return (
    <div className="mobile-nav-root">
      <a className="start-container" target="_blank" href={CONSTANTS.PMI}>
        <Globe size={"16px"} />
      </a>
      <img
        src={theme.theme === "light" ? LogoLight : LogoDark}
        className="logo"
        alt="PMI Standalone Logo"
      />
      <button onClick={context.toggleMobile} className="end-container">
        {context.mobileOpen ? <X size={"16px"} /> : <Menu size={"16px"} />}
      </button>
    </div>
  );
}
