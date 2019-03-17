/* global process */
import fs from "fs";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

const env = process.env;
export const pkg = JSON.parse(fs.readFileSync("./package.json"));
const name = env.NAME || "cyano";
const external = ["mithril", "react"];

const globals = {
  "mithril": "m",
  "react": "React"
};

export const createConfig = () => {
  const config = {
    input: env.ENTRY || "src/index.js",
    external,
    output: {
      name,
      globals,
    },
    plugins: [
      resolve(),
      commonjs(),
    ]
  };
  
  return config;
};