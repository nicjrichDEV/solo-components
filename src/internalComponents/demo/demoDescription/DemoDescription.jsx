import cn from "../../../utils/cn";
import "./DemoDescription.css";

export default function DemoDescription({ children, className, ...rest }) {
  const descriptionClasses = cn(`description`, className);
  return (
    <p className={descriptionClasses} {...rest}>
      {children}
    </p>
  );
}
