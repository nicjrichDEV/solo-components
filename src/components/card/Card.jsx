import cn from "../../utils/cn";
import "./Card.css";

export default function Card({ children, className, ...rest }) {
  const cardClasses = cn(`card`, className);
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}
