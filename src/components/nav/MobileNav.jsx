import CONSTANTS from "../../utils/constants";
import { Github, Menu } from "lucide-react";

export default function MobileNav({ toggleMobile }) {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-10 grid h-10 grid-cols-[40px_1fr_40px] border-t border-t-neutral-200 bg-white">
      <a
        className="flex items-center justify-center border-r border-r-neutral-200"
        href={CONSTANTS.GITHUB}
      >
        <Github size={"20px"} />
      </a>
      <div className="flex items-center justify-center">
        <h2 className="font-medium text-neutral-800">UI Next</h2>
      </div>
      <button
        onClick={toggleMobile}
        className="flex items-center justify-center border-l border-l-neutral-200"
      >
        <Menu size={"20px"} />
      </button>
    </div>
  );
}
