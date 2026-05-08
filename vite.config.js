import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://site-for-noumanian-school.vercel.app",
      dynamicRoutes: [
        "/",
        "",
        "about",
        "/news",
        "/contact",
        "levels",
        "levels/college",
        "levels/computer",
        "levels/primary",
      ],
    }),
    tailwindcss(),
  ],
});
