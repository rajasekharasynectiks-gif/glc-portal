import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // SSR server entry (your wrapper)
    server: {
      entry: "server",
    },
  },

  vite: {
    // optional safety: ensures correct output handling for Netlify/Nitro
    build: {
      outDir: ".netlify",
    },
  },
});