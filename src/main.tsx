import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Analytics } from "@vercel/analytics/react";

import "./index.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Analytics />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
