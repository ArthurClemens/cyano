/* global process */
import fs from "fs";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import pathmodify from "rollup-plugin-pathmodify";
import path from "path";

const env = process.env;
export const pkg = JSON.parse(fs.readFileSync("./package.json"));
const name = pkg.name;
const external = ["react", "mithril"];
const baseDir = process.cwd();
const whichCyano = env.CYANO;

const globals = {};
external.forEach(ext => {
  switch (ext) {
  case "mithril":
    globals["mithril"] = "m";
    break;
  default:
    globals[ext] = ext;
  }
});

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
      // Make sure that Mithril is included only once (if passed in INCLUDES env variable)
      pathmodify({
        aliases: [
          {
            id: "mithril/stream",
            resolveTo: "node_modules/mithril/stream/stream.js"
          },
          {
            id: "mithril",
            resolveTo: "node_modules/mithril/mithril.js"
          },
          {
            id: "cyano",
            resolveTo: path.resolve(baseDir, `node_modules/${whichCyano}/dist/${whichCyano}.mjs`),
          },
        ]
      }),
      commonjs({
        namedExports: {
          "node_modules/react/index.js": ["Children", "Component", "PropTypes", "createElement", "createFactory"],
          "node_modules/react-dom/index.js": ["render"]
        }
      }),
    ]
  };
  
  return config;
};