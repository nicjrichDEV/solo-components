import { Github, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import componentNames from "../utils/componentNames";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      console.log(event.target);
      if (
        !navRef.current.contains(event.target) ||
        event.target.tagName === "A"
      )
        toggleOpen();
    }

    if (open) document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  function toggleOpen() {
    setOpen((v) => !v);
  }

  return (
    <nav ref={navRef} className="fixed top-0 right-0 left-0 z-50">
      <div
        className={`grid h-10 grid-cols-[1fr_auto_1fr] items-center overflow-x-hidden border-b border-b-neutral-200 bg-white sm:hidden`}
      >
        <button
          onClick={toggleOpen}
          className="transition-background flex h-10 w-10 items-center justify-center justify-self-start border-r border-r-neutral-200 duration-150 ease-in-out hover:bg-neutral-200"
        >
          <Menu size={"20px"} />
        </button>

        <div className="pointer-events-none justify-self-center font-mono font-medium">
          UI Next
        </div>

        <div className="flex h-10 w-10 items-center justify-center justify-self-end border-l border-l-neutral-200">
          <a href="">
            <Github size={"20px"} />
          </a>
        </div>
      </div>
      <div
        className={`${open ? "max-h-80 border-b shadow-sm" : "max-h-0"} fixed top-10 right-0 left-0 z-50 flex w-full flex-col items-center overflow-hidden border-b-0 border-b-neutral-200 bg-white transition-all duration-300 ease-out`}
      >
        {componentNames.map((comp, i) => {
          return (
            <a href={`#${comp}`} key={i}>
              {comp}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
