import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ["src"] })],
  build: {
    copyPublicDir: false,
    lib: {
      name: "SebuLib",
      entry: resolve(__dirname, "src/main.ts"),
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
});
