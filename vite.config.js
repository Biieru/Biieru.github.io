import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Repositório Biieru.github.io = site na raiz (https://biieru.github.io/), então base é "/"
export default defineConfig({
  plugins: [react()],
  base: "/",
});
