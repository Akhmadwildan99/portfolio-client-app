import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Navbar } from "./components/Navbar.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <div className="container mx-auto px-4">
        <Navbar />
        <App />
      </div>
    </ErrorBoundary>
  </StrictMode>
);