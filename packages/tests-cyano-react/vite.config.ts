import { defineConfig } from "vite";
import path from 'path';
import react from "@vitejs/plugin-react";

const baseDir = path.resolve(process.cwd(), "../../");
const whichCyano = process.env.CYANO;
const cyanoAlias = path.resolve(baseDir, `node_modules/${whichCyano}`);

export default defineConfig({
  mode: "production",
  plugins: [react()],
  resolve: {
    alias: {
      cyano: cyanoAlias
    },
  },
});
