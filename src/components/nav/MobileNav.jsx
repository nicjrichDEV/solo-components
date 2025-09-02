import CONSTANTS from "../../utils/constants";
import { Github, Menu } from "lucide-react";
import "./MobileNav.css";

export default function MobileNav({ toggleMobile }) {
  return (
    <div className="mobile-nav-root">
      <a className="start-container" href={CONSTANTS.GITHUB}>
        <Github size={"20px"} />
      </a>
      <div className="middle-container">
        <h2 className="mark">UI Next</h2>
      </div>
      <button onClick={toggleMobile} className="end-container">
        <Menu size={"20px"} />
      </button>
    </div>
  );
}
