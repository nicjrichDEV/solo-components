import { Github, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import componentNames from "../utils/componentNames";
import CONSTANTS from "../utils/constants";

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileNavRef = useRef();

  useEffect(() => {
    function handleOutOfBounds(event) {
      if (
        !mobileNavRef.current.contains(event.target) ||
        event.target.tagName === "A"
      )
        toggleMobile();
    }

    if (mobileOpen) document.addEventListener("click", handleOutOfBounds);

    return () => document.removeEventListener("click", handleOutOfBounds);
  }, [mobileOpen]);

  function toggleMobile() {
    setMobileOpen((v) => !v);
  }

  const navLinks = componentNames.map((comp, index) => {
    return (
      <a
        href={`#${comp}`}
        key={index}
        className="mx-[39px] flex h-10 min-h-10 items-center justify-center justify-items-start border-x border-t border-x-neutral-200 border-t-neutral-200 text-base text-neutral-700"
      >
        {comp[0].toUpperCase() + comp.slice(1)}
      </a>
    );
  });

  return (
    <div className="flex min-h-screen flex-col lg:grid lg:grid-cols-[256px_1fr]">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:bg-red-500"></aside>

      {/* Mobile */}
      <nav className="lg:hidden" ref={mobileNavRef}>
        {/* Fixed top bar */}
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
        {/* Mobile Expand Down */}
        <div
          className={`${mobileOpen ? "h-60 border-t shadow-inner" : "h-0 border-t-0"} fixed right-0 bottom-10 left-0 flex flex-col-reverse overflow-hidden overflow-y-auto border-t-neutral-200 bg-white transition-all duration-300`}
        >
          {navLinks}
        </div>
      </nav>

      <main className="flex-1 overflow-y-auto bg-neutral-100">{children}</main>
    </div>
  );
}
