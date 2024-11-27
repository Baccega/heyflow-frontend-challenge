import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import JsonExplorer from "./JsonExplorer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <JsonExplorer />
  </StrictMode>,
);
