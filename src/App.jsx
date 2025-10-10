import { Banner } from "./components/banner";
import DemoBadge from "./demos/DemoBadge/DemoBadge";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <DemoBadge />
        <Banner.Root dismissible={true}>
          <Banner.Copy>
            <Banner.Title>Banner Title</Banner.Title>
            <Banner.Description>
              Testing some kind of banner description
            </Banner.Description>
          </Banner.Copy>
        </Banner.Root>
        <Banner.Root status="brand" dismissible={true}>
          <Banner.Copy>
            <Banner.Title>Banner Title</Banner.Title>
            <Banner.Description>
              Testing some kind of banner description
            </Banner.Description>
          </Banner.Copy>
        </Banner.Root>
        <Banner.Root status="info" dismissible={true}>
          <Banner.Copy>
            <Banner.Title>Banner Title</Banner.Title>
            <Banner.Description>
              Testing some kind of banner description
            </Banner.Description>
          </Banner.Copy>
        </Banner.Root>
        <Banner.Root status="success" dismissible={true}>
          <Banner.Copy>
            <Banner.Title>Banner Title</Banner.Title>
            <Banner.Description>
              Testing some kind of banner description
            </Banner.Description>
          </Banner.Copy>
        </Banner.Root>
        <Banner.Root status="warning" dismissible={true}>
          <Banner.Copy>
            <Banner.Title>Banner Title</Banner.Title>
            <Banner.Description>
              Testing some kind of banner description
            </Banner.Description>
          </Banner.Copy>
        </Banner.Root>
        <Banner.Root status="error" dismissible={true}>
          <Banner.Copy>
            <Banner.Title>Banner Title</Banner.Title>
            <Banner.Description>
              Testing some kind of banner description
            </Banner.Description>
          </Banner.Copy>
        </Banner.Root>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
