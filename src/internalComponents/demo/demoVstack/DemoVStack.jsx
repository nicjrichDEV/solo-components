import cn from "../../../utils/cn";
import "./DemoVStack.css";

export default function DemoVStack({ gap, children, className, ...rest }) {
  const vStackClasses = cn(`vstack`, className);
  return (
    <div className={vStackClasses} style={{ gap: gap }} {...rest}>
      {children}
    </div>
  );
}
