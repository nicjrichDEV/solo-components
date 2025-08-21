import cn from "../utils/cn";

export default function DemoArea({ children, className, style }) {
  const baseClasses = "demo-area";

  const allClasses = cn(baseClasses, className);

  return (
    <div className={allClasses} style={style}>
      {children}
    </div>
  );
}
