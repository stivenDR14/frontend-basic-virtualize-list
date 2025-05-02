import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { AppContextProvider } from "./context/app.context.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { customTheme } from "./utils/theme.ts";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={customTheme}>
    <CssBaseline />
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </ThemeProvider>
);
