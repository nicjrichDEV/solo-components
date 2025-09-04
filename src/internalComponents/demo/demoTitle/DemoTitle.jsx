import cn from "../../../utils/cn";
import "./DemoTitle.css";

export default function DemoTitle({ children, className, ...rest }) {
  const titleClasses = cn(`demo-title`, className);
  return (
    <h1 className={titleClasses} {...rest}>
      {children}
    </h1>
  );
}
