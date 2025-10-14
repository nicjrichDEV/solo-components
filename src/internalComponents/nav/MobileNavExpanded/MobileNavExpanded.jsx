import { useContext } from "react";
import { NavContext } from "../../../layouts/MainLayout/MainLayout";
import componentNames from "../../../utils/componentNames";
import "./MobileNavExpanded.css";
import { NavLink } from "react-router";

export default function MobileNavExpanded() {
  const navC = useContext(NavContext);
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
      className={`${navC.mobileOpen && "mobile-nav-expanded-open"} mobile-nav-expanded-base`}
    >
      {navLinks}
    </div>
  );
}
