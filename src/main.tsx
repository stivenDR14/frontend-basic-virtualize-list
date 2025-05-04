import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import { AppContextProvider } from "./context/app.context.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { customTheme } from "./utils/theme.ts";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={customTheme}>
    <CssBaseline />
    <AppContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AppContextProvider>
  </ThemeProvider>
);
