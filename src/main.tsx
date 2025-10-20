import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { globalStyles } from "./styles/globalStyles";
import App from "./App.tsx";

// Inject global styles
const styleElement = document.createElement("style");
styleElement.textContent = globalStyles;
document.head.appendChild(styleElement);

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
