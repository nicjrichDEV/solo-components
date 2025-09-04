import cn from "../../utils/cn";
import "./Demo.css";

export default function Demo({ children, className, ...rest }) {
  const demoClasses = cn(`demo-container`, className);
  return (
    <section className={demoClasses} {...rest}>
      {children}
    </section>
  );
}
