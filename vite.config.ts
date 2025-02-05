import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      "/api": {
        target: "https://saas.kyra.com",
        changeOrigin: true,
        secure: false, // Disable SSL verification if needed
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
