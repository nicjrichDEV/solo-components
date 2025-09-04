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
        <div style={{ height: "400px", backgroundColor: "red" }}></div>
        <div style={{ height: "400px", backgroundColor: "royalblue" }}></div>
        <div
          style={{ height: "400px", backgroundColor: "rebeccapurple" }}
        ></div>
      </MainLayout>
    </>
  );
}

export default App;
