import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "", // define base
  plugins: [react()],
  resolve: {
    // resolve path aliases
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
