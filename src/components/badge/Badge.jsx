import "./Badge.css";
import cn from "../../utils/cn";

export default function Badge({
  children,
  variant = "solid",
  status = "neutral",
  shape = "pill",
  className,
  ...rest
}) {
  const badgeClasses = cn(`badge ${variant} ${status} ${shape}`, className);

  return (
    <div className={badgeClasses} {...rest}>
      {children}
    </div>
  );
}
