import "./Badge.css";
import cn from "../../utils/cn";

export default function Badge({
  children,
  type = "square",
  color = "neutral",
  className,
  ...rest
}) {
  const badgeClasses = cn(`badge ${type} ${color}`, className);

  return (
    <div className={badgeClasses} {...rest}>
      {children}
    </div>
  );
}
