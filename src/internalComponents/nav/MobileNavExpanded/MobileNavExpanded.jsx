import { useContext } from "react";
import { ThemeContext } from "../../../App";
import { NavContext } from "../../../layouts/MainLayout/MainLayout";
import componentNames from "../../../utils/componentNames";
import "./MobileNavExpanded.css";

export default function MobileNavExpanded() {
  const context = useContext(NavContext);
  const navLinks = componentNames.map((comp, index) => {
    return (
      <a href={`#${comp}`} key={index} className="mobile-nav-expanded-links ">
        {comp[0].toUpperCase() + comp.slice(1)}
      </a>
    );
  });

  const theme = useContext(ThemeContext);

  return (
    <div
      className={`${context.mobileOpen && "mobile-nav-expanded-open"} mobile-nav-expanded-base`}
    >
      <button onClick={theme.toggleTheme}>Toggle Theme</button>
      {navLinks}
    </div>
  );
}
