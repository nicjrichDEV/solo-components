import { Globe } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../../App";
import LogoLight from "../../../assets/pmi-small-light.svg";
import LogoDark from "../../../assets/pmi-small-dark.svg";
import componentNames from "../../../utils/componentNames";
import CONSTANTS from "../../../utils/constants";
import "./SideNav.css";

export default function SideNav() {
  const theme = useContext(ThemeContext);

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
          {/* TODO: Wrap logo and title in href to return to / url */}
          {/* TODO: Change logo based on light or dark mode */}
          <img
            src={theme.theme === "light" ? LogoLight : LogoDark}
            alt="PMI Standalone logo"
            className="logo"
          />
          <h1>Catalyst 2.0 🚧</h1>
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
      {/* TODO: Actually make this not look like poo */}
      <button onClick={theme.toggleTheme}>Toggle Theme</button>
    </aside>
  );
}
