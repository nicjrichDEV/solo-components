import cn from "../../utils/cn";
import "./Demo.css";

export default function Demo({
  componentName,
  title,
  description,
  className,
  children,
  ...rest
}) {
  const demoClasses = cn(`demo-container`, className);
  return (
    <section id={componentName} className={demoClasses} {...rest}>
      <div className="demo-copy">
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
      </div>
      <div>{children}</div>
    </section>
  );
}
