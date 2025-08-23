import Layout from "./layouts/MainLayout";
import componentNames from "./utils/componentNames";

function App() {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center lg:max-w-[1128px]">
          {componentNames.map((comp) => (
            <section id={`${comp}`} className="h-80 w-full bg-amber-100">
              {comp}
            </section>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default App;
