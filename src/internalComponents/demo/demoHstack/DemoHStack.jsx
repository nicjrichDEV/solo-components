import cn from "../../../utils/cn";
import "./DemoHStack.css";

export default function DemoHStack({ gap, children, className, ...rest }) {
  const hStackClasses = cn(`hstack`, className);
  return (
    <div className={hStackClasses} style={{ gap: gap }} {...rest}>
      {children}
    </div>
  );
}
