import { createContext, useEffect, useState } from "react";
import DemoBadge from "./demos/DemoBadge/DemoBadge";
import MainLayout from "./layouts/MainLayout/MainLayout";

const ThemeContext = createContext(null);

function App() {
  // Might need to abstract this into its own component. That way we can check preferred theme and save to local s
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    const doc = document.documentElement;
    doc.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainLayout>
        <DemoBadge />
      </MainLayout>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };
