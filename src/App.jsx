import { Globe2 } from "lucide-react";
import { createContext, useEffect, useState } from "react";
import { Banner } from "./components/banner/primitives";
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
        <Banner.Root>
          <Globe2 />
          <Banner.Copy>
            <Banner.Title>Banner Title</Banner.Title>
            <Banner.Description>
              Testing some kind of banner description
            </Banner.Description>
          </Banner.Copy>
        </Banner.Root>
      </MainLayout>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };
