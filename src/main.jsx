import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import emailjs from "@emailjs/browser";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { EMAILJS_CONFIG } from "./components/config/emailjs.config.js";

emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
