import { useContext } from "react";
import { BannerContext } from "./BannerContext";

export default function BannerDescription({ children }) {
  const bannerStatus = useContext(BannerContext);
  return <p className="banner-description">{children}</p>;
}
