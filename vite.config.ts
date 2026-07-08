import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { defineConfig } from "vite";

const srcPath = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig(({ mode }) => ({
  // Use /glc-portal/ for local development and / for production
  base: mode === "production" ? "/" : "/glc-portal/",

  resolve: {
    alias: {
      "@": srcPath,
    },
    tsconfigPaths: true,
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
      "@tanstack/react-router",
    ],
  },

  plugins: [
    TanStackRouterVite(),
    tailwindcss(),
    viteReact(),
  ],

  build: {
    outDir: "dist",
  },
}));