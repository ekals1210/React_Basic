import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import Memo from "./Effect.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Memo />
  </StrictMode>
);
