import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col overflow-y-auto pt-10">
        <section id="badge" className="h-52 w-full bg-amber-200">
          badge
        </section>
        <section id="banner" className="h-52 w-full bg-amber-300">
          banner
        </section>
        <section id="card" className="h-52 w-full bg-amber-400">
          card
        </section>
        <section id="testimonial" className="h-52 w-full bg-amber-500">
          testimonial
        </section>
        <section id="toast" className="h-52 w-full bg-amber-600">
          toast
        </section>
        <section id="tooltip" className="h-52 w-full bg-amber-700">
          tooltip
        </section>
      </main>
    </>
  );
}

export default App;
