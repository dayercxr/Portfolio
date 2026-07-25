import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/src/styles/index.css";
import Portfolio from "./Portfolio.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>
);
