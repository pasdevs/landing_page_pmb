import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/landing_page_pmb/",
  plugins: [react(), tailwindcss()],
});