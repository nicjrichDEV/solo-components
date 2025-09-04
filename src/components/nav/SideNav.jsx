import componentNames from "../../utils/componentNames";
import CONSTANTS from "../../utils/constants";
import { Globe } from "lucide-react";
import "./SideNav.css";
import Logo from "../../assets/pmi-small.svg";

export default function SideNav() {
  const navLinks = componentNames.map((comp, index) => {
    return (
      <div key={index} className="sidebar-link-container">
        <li>
          <a href={`#${comp}`}>{comp[0].toUpperCase() + comp.slice(1)}</a>
        </li>
      </div>
    );
  });

  return (
    <aside className="sidebar-root">
      <div className="sidebar-header-container">
        <div className="logo-container">
          <img src={Logo} alt="PMI Standalone logo" className="logo" />
          <h1>Components++</h1>
        </div>
        <a
          className="sidebar-header-action"
          target="_blank"
          href={CONSTANTS.PMI}
        >
          <Globe size={"16px"} />
        </a>
      </div>
      <ul className="sidebar-content-container">{navLinks}</ul>
    </aside>
  );
}
