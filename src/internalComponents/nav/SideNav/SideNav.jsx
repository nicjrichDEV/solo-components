import { Globe, Moon, Sun } from "lucide-react";
import cn from "../../../utils/cn";
import componentNames from "../../../utils/componentNames";
import CONSTANTS from "../../../utils/constants";
import "./SideNav.css";
import { useTheme } from "../../../contexts/ThemeContext.jsx";
import LogoLight from "../../../assets/pmi-small-light.svg";
import LogoDark from "../../../assets/pmi-small-dark.svg";
import { NavLink } from "react-router";
import { useNav } from "../../../contexts/NavContext.jsx";

// TODO: Refactor into parts
// TODO: Replace classes with BEM

export default function SideNav() {
  const { theme, toggleTheme } = useTheme();

  const { sidebarOverlay } = useNav();

  const navLinks = componentNames.map((comp, index) => {
    return (
      <div key={index} className="sidebar-link-container">
        <li>
          <NavLink to={comp.path} end>
            {comp.name[0].toUpperCase() + comp.name.slice(1)}
          </NavLink>
        </li>
      </div>
    );
  });

  return (
    <aside className={cn("sidebar-root", sidebarOverlay && "open")}>
      <div className="sidebar-header-container">
        <div className="logo-container">
          <img
            src={theme === "light" ? LogoLight : LogoDark}
            alt="PMI Standalone logo"
            className="logo"
          />
          <h1>Catalyst 🧪</h1>
        </div>
        <div className="sidebar-header-action-container">
          <button className="sidebar-header-action" onClick={toggleTheme}>
            {theme === "light" ? <Moon size={"16px"} /> : <Sun size={"16px"} />}
          </button>
          <a
            className="sidebar-header-action"
            target="_blank"
            href={CONSTANTS.PMI}
          >
            <Globe size={"16px"} />
          </a>
        </div>
      </div>
      <ul className="sidebar-content-container">{navLinks}</ul>
      {/* TODO: Actually make this not look like poo */}
      {/* TODO: Create Brand Switcher Component */}
    </aside>
  );
}
