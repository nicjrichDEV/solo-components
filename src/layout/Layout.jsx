import cn from "../utils/cn";
import Sidebar from "../sidebar/index";
import { createContext, useEffect, useState } from "react";

const SidebarContext = createContext();

export default function Layout({ children, className = "" }) {
  const [sidebarOpen, setSidebarOpen] = useState(() =>
    JSON.parse(localStorage.getItem("sidebarOpen") ?? "true"),
  );

  // TODO(human): Fix the useEffect to only SAVE to localStorage, not read and update state
  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(sidebarOpen));
  }, [sidebarOpen]);

  function toggleSidebar() {
    setSidebarOpen((prevSidebar) => !prevSidebar);
  }

  const baseClasses =
    "h-screen w-full bg-gray-50 relative flex overflow-hidden";
  const allClasses = cn(baseClasses, className);

  return (
    <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar }}>
      <div className={allClasses}>
        <Sidebar isOpen={sidebarOpen}>
          <Sidebar.Header>Header</Sidebar.Header>
          <Sidebar.Content>Content</Sidebar.Content>
          <Sidebar.Footer>Footer</Sidebar.Footer>
        </Sidebar>
        {children}
        <button onClick={toggleSidebar}>Toggle sidebar</button>
      </div>
    </SidebarContext.Provider>
  );
}
