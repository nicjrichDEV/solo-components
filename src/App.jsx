import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";


function App() {

  useEffect(() => {
    const doc = document.documentElement
    doc.setAttribute('data-theme', 'light')
  })

  return (
    <>
      <MainLayout>
        <div className="flex w-full flex-col items-center lg:max-w-[1128px]">
        </div>
      </MainLayout>
    </>
  );
}

export default App;
