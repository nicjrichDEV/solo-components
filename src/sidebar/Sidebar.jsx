import cn from "../utils/cn";

export default function Sidebar({ children, className }) {
  const baseClasses =
    "w-64 h-full border-r border-neutral-200 bg-white flex-shrink-0";
  const allClasses = cn(baseClasses, className);
  return <aside className={allClasses}>{children}</aside>;
}
