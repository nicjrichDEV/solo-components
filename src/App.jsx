import { createContext, useEffect, useState } from "react";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Badge from "./components/badge/Badge";

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
        {/* SM */}
        <Badge size="lg" variant="outline">
          Badge
        </Badge>
        <Badge size="lg" variant="outline" status="brand">
          Badge
        </Badge>
        <Badge size="lg" variant="outline" status="info">
          Badge
        </Badge>
        <Badge size="lg" variant="outline" status="success">
          Badge
        </Badge>
        <Badge size="lg" variant="outline" status="warning">
          Badge
        </Badge>
        <Badge size="lg" variant="outline" status="error">
          Badge
        </Badge>
      </MainLayout>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };
