import cn from "../../utils/cn";

export default function Testimonial({
  children,
  variant = "picture",
  pictureURL,
}) {
  const testimonialClass = cn(`testimonial ${variant}`);

  return <h1>{children}</h1>;
}
