import {
  AlertCircle,
  CircleAlert,
  CircleCheck,
  Info,
  TriangleAlert,
  X,
} from "lucide-react";
import { useState } from "react";
import cn from "../../../utils/cn";
import "../styles/Banner.css";
import { BannerContext } from "./BannerContext";

export default function BannerRoot({
  children,
  status = "neutral",
  icon = true,
  dismissible,
  className,
  ...rest
}) {
  const [dismissed, setDismissed] = useState(false);

  function dismiss() {
    setDismissed((prev) => !prev);
  }

  const bannerClasses = cn(
    `banner ${status}`,
    `${dismissed && "hideBanner"}`,
    className
  );

  const bannerDismissClasses = cn(`dismissButton ${status}`);

  let iconAsset;

  switch (status) {
    case "neutral":
      iconAsset = <AlertCircle size="20px" />;
      break;
    case "brand":
      iconAsset = <AlertCircle size="20px" />;
      break;
    case "info":
      iconAsset = <Info size="20px" />;
      break;
    case "success":
      iconAsset = <CircleCheck size="20px" />;
      break;
    case "warning":
      iconAsset = <TriangleAlert size="20px" />;
      break;
    case "error":
      iconAsset = <CircleAlert size="20px" />;
      break;
    default:
      iconAsset = <AlertCircle size="20px" />;
      break;
  }

  return (
    <BannerContext value={status}>
      <div {...rest} className={bannerClasses}>
        {icon && iconAsset}
        {dismissible && (
          <button onClick={dismiss} className={bannerDismissClasses}>
            <X size="12px" />
          </button>
        )}
        {children}
      </div>
    </BannerContext>
  );
}
