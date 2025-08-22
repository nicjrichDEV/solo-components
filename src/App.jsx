import Layout from "./layouts/MainLayout";
import componentNames from "./utils/componentNames";

function App() {
  return (
    <>
      <Layout>
        {componentNames.map((comp) => (
          <section id={`${comp}`} className="h-80 w-full bg-amber-100">
            {comp}
          </section>
        ))}
      </Layout>
    </>
  );
}

export default App;
