import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Catalyst Labs</h1>
        <p>
          A set of theming and components experiments to find the next
          generation of design systems.
        </p>
      </section>
      <section>
        <h2>Goals</h2>
        Bento section - Multi Brand - Plain CSS - Zero dependency components -
        Minimal token system
      </section>
      <section>
        <h2>Theme System</h2>
        <p>
          Creating a theming system that can support multiple brands, or product
          verticals with as simple as duplicating a token starter file and
          adding your custom values.
        </p>
      </section>
      <section>
        <h2>Components</h2>
        <p>
          A selection of zero dependency React components to showcase Catalyst
          Labs multibrand theming support
        </p>
      </section>
    </div>
  );
}
