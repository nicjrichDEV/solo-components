import CONSTANTS from "../../utils/constants";
import { Globe, Menu } from "lucide-react";
import Logo from "../../assets/pmi-small.svg";
import "./MobileNav.css";

export default function MobileNav({ toggleMobile }) {
  return (
    <div className="mobile-nav-root">
      <a className="start-container" target="_blank" href={CONSTANTS.PMI}>
        <Globe size={"16px"} />
      </a>
      <img src={Logo} className="logo" alt="PMI Standalone Logo" />
      <button onClick={toggleMobile} className="end-container">
        <Menu size={"16px"} />
      </button>
    </div>
  );
}
