import Layout from "./layouts/MainLayout";
import componentNames from "./utils/componentNames";

function App() {
  return (
    <>
      <Layout>
        {componentNames.map((comp) => (
          <div className="h-80 w-full bg-amber-100">{comp}</div>
        ))}
      </Layout>
    </>
  );
}

export default App;
