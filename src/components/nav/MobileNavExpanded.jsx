import componentNames from "../../utils/componentNames";

export default function MobileExpanded({ mobileOpen }) {
  const navLinks = componentNames.map((comp, index) => {
    return (
      <a
        href={`#${comp}`}
        key={index}
        className="mx-[39px] flex h-10 min-h-10 items-center justify-center justify-items-start border-x border-t border-x-neutral-200 border-t-neutral-200 text-base text-neutral-700 last:border-t-0"
      >
        {comp[0].toUpperCase() + comp.slice(1)}
      </a>
    );
  });

  return (
    <div
      className={`${mobileOpen ? "translate-y-0 border-t shadow-inner" : "translate-y-full border-t-0"} fixed right-0 bottom-10 left-0 flex max-h-9/12 flex-col-reverse overflow-y-auto border-t-neutral-200 bg-white transition-transform duration-300 will-change-transform`}
    >
      {navLinks}
    </div>
  );
}
