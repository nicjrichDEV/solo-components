import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";

function App() {
  useEffect(() => {
    const doc = document.documentElement;
    doc.setAttribute("data-theme", "light");
  });

  return (
    <>
      <MainLayout>
        <div className="">stuff</div>
      </MainLayout>
    </>
  );
}

export default App;
