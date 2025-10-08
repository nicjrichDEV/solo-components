import cn from "../../utils/cn";
import "./Badge.css";

export default function Badge({
  children,
  variant = "solid",
  size = "md",
  status = "neutral",
  shape = "pill",
  className,
  ...rest
}) {
  const badgeClasses = cn(
    `badge ${variant} ${size} ${status} ${shape}`,
    className
  );

  return (
    <div className={badgeClasses} {...rest}>
      {children}
    </div>
  );
}
