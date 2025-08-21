import "./Badge.css";
import cn from "../utils/cn";

export default function Badge({
  children,
  shape = "square",
  color = "gray",
  className,
  ...rest
}) {
  const baseClasses = "badge";
  const colorClass = `badge-${color}`;
  const shapeClass = `badge-${shape}`;

  const allClasses = cn(baseClasses, colorClass, shapeClass, className);

  return (
    <div className={allClasses} {...rest}>
      <p className="badge-p">{children}</p>
    </div>
  );
}
