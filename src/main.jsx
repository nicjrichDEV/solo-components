import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/colors.css";
import "./styles/tokens.css";
import "./styles/brands/pmi.css";
import "./styles/brands/pmi-high-contrast.css";
import "./styles/brands/infinity.css";
import "./styles/brands/infinity-high-contrast.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
