import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/Authcontext.jsx";
import { ThemeProvider } from "./context/Themecontext.jsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
    <AuthProvider>
      <BrowserRouter>
      <Toaster/>
        <App />
      </BrowserRouter>
    </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
