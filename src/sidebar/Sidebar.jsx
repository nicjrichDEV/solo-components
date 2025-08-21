import cn from "../utils/cn";

export default function Sidebar({ children, className, isOpen }) {
  const allClasses = cn(
    "h-full border-r border-neutral-200 bg-white flex-shrink-0 transition-width duration-300 overflow-hidden",
    isOpen ? "w-64" : "w-0",
    className,
  );
  return <aside className={allClasses}>{children}</aside>;
}
