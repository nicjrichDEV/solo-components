import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Badge from "./components/badge/Badge";
import { AccessibilityIcon } from "lucide-react";

function App() {
  useEffect(() => {
    const doc = document.documentElement;
    doc.setAttribute("data-theme", "light");
  });

  return (
    <>
      <MainLayout>
        {/* SM */}
        <Badge size="lg" variant="outline" shape="square">
          Badge
        </Badge>
        <Badge size="lg" variant="outline" shape="square" status="brand">
          Badge
        </Badge>
        <Badge size="lg" variant="outline" shape="square" status="info">
          Badge
        </Badge>
        <Badge size="lg" variant="outline" shape="square" status="success">
          Badge
        </Badge>
        <Badge size="lg" variant="outline" shape="square" status="warning">
          Badge
        </Badge>
        <Badge size="lg" variant="outline" shape="square" status="error">
          Badge
        </Badge>
      </MainLayout>
    </>
  );
}

export default App;
