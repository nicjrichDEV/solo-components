import componentNames from "../../utils/componentNames";
import CONSTANTS from "../../utils/constants";
import { Github } from "lucide-react";

export default function SideNav() {
  const navLinks = componentNames.map((comp, index) => {
    return (
      <a
        href={`#${comp}`}
        key={index}
        className="text-text-secondary font-body flex h-8 min-h-8 items-center justify-items-start border-b border-b-neutral-200 px-2 text-sm font-medium transition-colors duration-150 ease-in hover:bg-neutral-200"
      >
        {comp[0].toUpperCase() + comp.slice(1)}
      </a>
    );
  });

  return (
    <aside className="hidden lg:flex lg:flex-col lg:border-r lg:border-r-neutral-200 lg:bg-white">
      <div className="flex h-10 items-center justify-between border-b border-b-neutral-200 pl-2">
        <h2 className="font-display text-primary font-medium">UI Next</h2>
        <a
          className="flex h-full w-10 items-center justify-center border-l border-l-neutral-200 transition-colors duration-150 ease-in hover:bg-neutral-200 active:shadow-inner"
          href={CONSTANTS.GITHUB}
        >
          <Github size={"18px"} />
        </a>
      </div>
      <div className="flex-1">{navLinks}</div>
    </aside>
  );
}
