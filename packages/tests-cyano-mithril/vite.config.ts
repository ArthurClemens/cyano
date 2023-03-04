import { defineConfig } from "vite";
import path from 'path';

const baseDir = path.resolve(process.cwd(), "../../");
const whichCyano = process.env.CYANO;
const cyanoAlias = path.resolve(baseDir, `node_modules/${whichCyano}`);

export default defineConfig({
  mode: "production",
  resolve: {
    alias: {
      cyano: cyanoAlias
    },
  },
});
