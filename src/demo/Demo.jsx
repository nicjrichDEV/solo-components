import "./Demo.css";

export default function Demo({ children, title, description }) {
  return (
    <article className="demo-root">
      <div className="demo-copy">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </article>
  );
}
