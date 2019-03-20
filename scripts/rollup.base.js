/* global process */
import fs from "fs";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import pathmodify from "rollup-plugin-pathmodify";

const env = process.env;
export const pkg = JSON.parse(fs.readFileSync("./package.json"));
const name = env.NAME;
const external = ["mithril", "react"];

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