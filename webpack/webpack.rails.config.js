// Run like this
// cd webpack && webpack -w --config webpack.rails.config.js

var path = require("path");
var railsBundleFile = "webpack.js";
var railsJsAssetsDir = "../app/assets/javascripts";
var railsBundleMapFile = railsBundleFile + ".map";
var railsBundleMapRelativePath = "../public/assets/" + railsBundleMapFile;

module.exports = {
  context: __dirname,
  entry: [
    "./assets/javascripts/test"
  ],
  output: {
    filename: railsBundleFile,
    path: railsJsAssetsDir
  },
  // Let's load jQuery from the CDN or rails asset pipeline
  externals: {
    jquery: "var jQuery"
  },
  resolve: {
    root: [ path.join(__dirname, "assets/javascripts")],
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['es6', 'jsx?harmony'] },
      // Next 2 lines expose jQuery and $ to any JavaScript files loaded after rails-bundle.js
      //   in the Rails Asset Pipeline. Thus, load this one prior.
      //{ test: require.resolve("jquery"), loader: "expose?jQuery" },
      //{ test: require.resolve("jquery"), loader: "expose?$" },
      //{ test: require.resolve("react"), loader: "expose?React" }
    ]
  }
  //devtool: "inline-source-map"
};
