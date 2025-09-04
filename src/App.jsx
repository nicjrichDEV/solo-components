import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Badge from "./components/badge/Badge";

function App() {
  useEffect(() => {
    const doc = document.documentElement;
    doc.setAttribute("data-theme", "light");
  });

  return (
    <>
      <MainLayout>
        <Badge>Badge</Badge>
        <Badge type="pill">Badge</Badge>
      </MainLayout>
    </>
  );
}

export default App;
