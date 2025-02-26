import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      exportAsDefault: true,
      esbuildOptions: {
        loader: "jsx",
      },
    }),
  ],
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:3000",
  },
});
