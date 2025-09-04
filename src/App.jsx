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
        <Badge size="sm">Badge</Badge>
        <Badge size="sm" status="brand">
          Badge
        </Badge>
        <Badge size="sm" status="info">
          Badge
        </Badge>
        <Badge size="sm" status="success">
          Badge
        </Badge>
        <Badge size="sm" status="warning">
          Badge
        </Badge>
        <Badge size="sm" status="error">
          Badge
        </Badge>
        {/* MD */}
        <Badge variant="soft">Badge</Badge>
        <Badge variant="soft" status="brand">
          Badge
        </Badge>
        <Badge variant="soft" status="info">
          Badge
        </Badge>
        <Badge variant="soft" status="success">
          Badge
        </Badge>
        <Badge variant="soft" status="warning">
          Badge
        </Badge>
        <Badge variant="soft" status="error">
          Badge
        </Badge>
        {/* LG */}
        <Badge size="lg">Badge</Badge>
        <Badge size="lg" status="brand">
          Badge
        </Badge>
        <Badge size="lg" status="info">
          Badge
        </Badge>
        <Badge size="lg" status="success">
          Badge
        </Badge>
        <Badge size="lg" status="warning">
          Badge
        </Badge>
        <Badge size="lg" status="error">
          Badge
        </Badge>
      </MainLayout>
    </>
  );
}

export default App;
