import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen((v) => !v);
  }

  return (
    <>
      <nav
        className={`relative grid h-10 grid-cols-[1fr_auto_1fr] items-center bg-white px-2.5 sm:hidden ${open ? "border-b-opacity-100 border-b border-b-neutral-200" : "border-b-opacity-0"} transition-opacity duration-250 ease-out`}
      >
        <button
          onClick={toggleOpen}
          className="transition-background flex h-6 w-6 items-center justify-center justify-self-start rounded duration-150 ease-in-out hover:bg-neutral-200 active:bg-neutral-300"
        >
          <Menu size={"20px"} />
        </button>

        <div className="pointer-events-none justify-self-center font-mono font-medium">
          UI Next
        </div>

        <div className="justify-self-end">
          {/* Optional Right Action for future */}
        </div>
      </nav>
      <div
        className={`${open ? "h-80 shadow-lg" : "h-0"} w-full overflow-hidden border-b border-b-neutral-200 bg-white transition-all duration-300 ease-out`}
      ></div>
    </>
  );
}
