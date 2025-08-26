import MainLayout from "./layouts/MainLayout";
import Badges from "./demos/Badges";

function App() {
  return (
    <>
      <MainLayout>
        <div className="flex w-full flex-col items-center lg:max-w-[1128px]">
          <Badges />
        </div>
      </MainLayout>
    </>
  );
}

export default App;
