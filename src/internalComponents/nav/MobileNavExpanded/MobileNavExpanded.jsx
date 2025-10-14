import componentNames from "../../../utils/componentNames";
import "./MobileNavExpanded.css";
import { NavLink, useLocation } from "react-router";
import { useNav } from "../../../contexts/NavContext.jsx";
import { useEffect } from "react";

export default function MobileNavExpanded() {
  const { mobileOpen, setMobileOpen } = useNav();
  const location = useLocation();

  // Close mobile nav when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location, setMobileOpen]);

  const navLinks = componentNames.map((comp, index) => {
    return (
      <NavLink to={comp.path} end key={index}>
        <li className="mobile-nav-expanded-links">
          <p>{comp.name[0].toUpperCase() + comp.name.slice(1)}</p>
        </li>
      </NavLink>
    );
  });

  return (
    <div
      className={`${mobileOpen && "mobile-nav-expanded-open"} mobile-nav-expanded-base`}
    >
      {navLinks}
    </div>
  );
}
