import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { DraftProvider } from "./context/DraftContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DraftProvider>
        <App></App>
      </DraftProvider>
    </BrowserRouter>
  </StrictMode>,
);
