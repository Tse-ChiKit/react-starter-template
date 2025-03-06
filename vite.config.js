import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { viteMockServe } from "vite-plugin-mock";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss(),
    viteMockServe({
      mockPath: "./src/mocks",
      localEnabled: command === "serve", // Enabled in dev mode
      prodEnabled: command !== "serve", // Enabled in prod mode
      watchFiles: true,
      logger: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
