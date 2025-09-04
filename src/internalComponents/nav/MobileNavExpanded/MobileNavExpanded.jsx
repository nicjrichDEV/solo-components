import { useContext } from "react";
import { NavContext } from "../../../layouts/MainLayout/MainLayout";
import componentNames from "../../../utils/componentNames";
import "./MobileNavExpanded.css";

export default function MobileNavExpanded() {
  const navC = useContext(NavContext);
  const navLinks = componentNames.map((comp, index) => {
    return (
      <a href={`#${comp}`} key={index} className="mobile-nav-expanded-links ">
        {comp[0].toUpperCase() + comp.slice(1)}
      </a>
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
