import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
<<<<<<< HEAD
import svgr from "vite-plugin-svgr";
=======
import dotenv from "dotenv";

dotenv.config(); 
>>>>>>> b0c86f2b9d23db2b2dafc3c36f91f954b7e89655

export default defineConfig({
  define: {
    "process.env": JSON.stringify(process.env), // Expose all env variables
  },
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
