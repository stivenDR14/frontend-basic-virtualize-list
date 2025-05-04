import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/frontend-basic-virtualize-list/",
  build: {
    outDir: "build",
  },
});
