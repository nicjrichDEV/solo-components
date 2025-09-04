import { createContext, useEffect, useState } from "react";
import Badge from "./components/badge/Badge";
import Demo from "./internalComponents/demo/index";
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
        <Demo.Root>
          <Demo.VStack gap={"4px"}>
            <Demo.Title>Badge</Demo.Title>
            <Demo.Description>
              A non-interactive div that downstream teams can use to assign
              specific meaning within their own apps.
            </Demo.Description>
          </Demo.VStack>
          <Demo.HStack gap={"16px"}>
            <Demo.VStack gap={"2px"}>
              <Badge>Neutral</Badge>
              <Badge status="brand">Brand</Badge>
              <Badge status="info">Info</Badge>
              <Badge status="success">Success</Badge>
              <Badge status="warning">Warning</Badge>
              <Badge status="error">Error</Badge>
            </Demo.VStack>
            <Demo.VStack gap={"2px"}>
              <Badge>Neutral</Badge>
              <Badge variant="soft" status="brand">
                Brand
              </Badge>
              <Badge variant="soft" status="info">
                Info
              </Badge>
              <Badge variant="soft" status="success">
                Success
              </Badge>
              <Badge variant="soft" status="warning">
                Warning
              </Badge>
              <Badge variant="soft" status="error">
                Error
              </Badge>
            </Demo.VStack>
            <Demo.VStack gap={"2px"}>
              <Badge>Neutral</Badge>
              <Badge variant="outline" status="brand">
                Brand
              </Badge>
              <Badge variant="outline" status="info">
                Info
              </Badge>
              <Badge variant="outline" status="success">
                Success
              </Badge>
              <Badge variant="outline" status="warning">
                Warning
              </Badge>
              <Badge variant="outline" status="error">
                Error
              </Badge>
            </Demo.VStack>
          </Demo.HStack>
        </Demo.Root>
      </MainLayout>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };
