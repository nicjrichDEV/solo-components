import { Banner } from "../../components/banner";
import "./BannerPage.css";

export default function BannerPage() {
  return (
    <section className="safe-area">
      <div className="banner-col">
        <Banner.Root dismissible={true}>
          <Banner.Copy>
            <Banner.Title>Banner Title</Banner.Title>
            <Banner.Description>
              Testing some kind of banner description
            </Banner.Description>
          </Banner.Copy>
        </Banner.Root>
        <Banner.Root variant="subtle" dismissible={true}>
          <Banner.Copy>
            <Banner.Title>Banner Title</Banner.Title>
            <Banner.Description>
              Testing some kind of banner description
            </Banner.Description>
          </Banner.Copy>
        </Banner.Root>
        <Banner.Root variant="outline" dismissible={true}>
          <Banner.Copy>
            <Banner.Title>Banner Title</Banner.Title>
            <Banner.Description>
              Testing some kind of banner description
            </Banner.Description>
          </Banner.Copy>
        </Banner.Root>
      </div>
    </section>
  );
}
