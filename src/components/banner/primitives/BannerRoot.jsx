import cn from "../../../utils/cn";
import "../Banner.css";

export default function BannerRoot({
  children,
  status = "neutral",
  className,
  ...rest
}) {
  const bannerClasses = cn(`banner ${status}`, className);
  return (
    <div {...rest} className={bannerClasses}>
      {children}
    </div>
  );
}
