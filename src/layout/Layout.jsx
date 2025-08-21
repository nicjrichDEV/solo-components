import cn from "../utils/cn";
import Sidebar from "../sidebar/Sidebar";

// TODO(human): Add useState and useEffect imports here

export default function Layout({ children, className = "" }) {
  // TODO(human): Add state management here
  // - Create sidebarOpen state with localStorage initialization
  // - Add useEffect to persist state changes
  // - Create toggleSidebar function

  const baseClasses =
    "h-screen w-full bg-gray-50 relative flex overflow-hidden";
  const allClasses = cn(baseClasses, className);

  return (
    <div className={allClasses}>
      <Sidebar>test</Sidebar>
      {children}
    </div>
  );
}
