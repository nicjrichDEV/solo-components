import componentNames from "../../utils/componentNames";
import "./MobileNavExpanded.css";

export default function MobileExpanded({ mobileOpen }) {
  const navLinks = componentNames.map((comp, index) => {
    return (
      <a
        href={`#${comp}`}
        key={index}
        className="mobile-nav-expanded-links mx-[39px] flex h-10 min-h-10 items-center justify-center justify-items-start border-x border-t border-x-neutral-200 border-t-neutral-200 text-base text-neutral-700 last:border-t-0"
      >
        {comp[0].toUpperCase() + comp.slice(1)}
      </a>
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
