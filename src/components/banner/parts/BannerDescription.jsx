import { useContext } from "react";
import { BannerContext } from "./BannerContext";

export default function BannerDescription({ children }) {
  const bannerStatus = useContext(BannerContext);
  console.log(bannerStatus);
  return <p className="banner-description">{children}</p>;
}
