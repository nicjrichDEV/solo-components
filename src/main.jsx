import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import "./styles/brands/infinity-high-contrast.css";
import "./styles/brands/infinity.css";
import "./styles/brands/pmi-high-contrast.css";
import "./styles/brands/pmi.css";
import "./styles/colors.css";
import "./styles/reset.css";
import "./styles/tokens.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
