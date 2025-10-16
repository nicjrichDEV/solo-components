import MainLayout from "./layouts/MainLayout/MainLayout";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage.jsx";
import BadgePage from "./pages/badge/BadgePage.jsx";
import BannerPage from "./pages/banner/BannerPage.jsx";
import CardPage from "./pages/card/CardPage.jsx";
import TestimonialPage from "./pages/testimonial/TestimonialPage.jsx";
import ToastPage from "./pages/toast/ToastPage.jsx";
import TooltipPage from "./pages/tooltip/TooltipPage.jsx";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="badge" element={<BadgePage />} />
          <Route path="banner" element={<BannerPage />} />
          <Route path="card" element={<CardPage />} />
          <Route path="testimonial" element={<TestimonialPage />} />
          <Route path="toast" element={<ToastPage />} />
          <Route path="tooltip" element={<TooltipPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
