import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "", // define base
  plugins: [react()],
  // redefine server
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://127.0.0.1:5000",
  //       changeOrigin: true,
  //       // rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
  resolve: {
    // resolve path aliases
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
