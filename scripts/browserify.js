const fs = require("fs");
const path = require("path");
const browserify = require("browserify");
const babelify = require("babelify");
const tfilter = require('tfilter');
const pathmodify = require('pathmodify');

const baseDir = process.cwd();
const env = process.env;
const whichCyano = env.CYANO;

browserify({ debug: true })
  .plugin(pathmodify, {
    mods: [
      pathmodify.mod.id("cyano", path.resolve(baseDir, `node_modules/${whichCyano}`)),
      pathmodify.mod.id("mithril", path.resolve(baseDir, `node_modules/mithril`)),
    ]
  })
  .transform(babelify.configure({ presets: ["@babel/preset-env", "@babel/preset-react"] }))
  .transform(tfilter(babelify, { include: 'node_modules/**/*.js' }), {
    global: true,
    presets: ["@babel/preset-env", "@babel/preset-react"]
  })
  .require("./src/index.js", { entry: true })
  .bundle()
  .on("error", function (err) { console.log("Error: " + err.message); })
  .pipe(fs.createWriteStream("dist/js/index.js"));
