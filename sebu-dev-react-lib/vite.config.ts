import path from "path";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import VitePluginStaticCopy from "vite-plugin-static-copy";

import react from "@vitejs/plugin-react";
import { UserConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    dts({ rollupTypes: true }),
    react(),
    VitePluginStaticCopy({
      targets: [
        {
          src: "lib/assets/*", // Hier gibst du den Pfad zu den Assets an
          dest: "assets", // Das Zielverzeichnis innerhalb von dist
        },
      ],
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "mylib",
      formats: ["es", "cjs", "umd", "iife"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
} satisfies UserConfig);
