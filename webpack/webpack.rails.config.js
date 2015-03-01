var path = require("path");
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

var railsJsAssetsDir = "../app/assets/javascripts";

module.exports = {
  context: __dirname,
  entry: {
    feed: "./assets/javascripts/feed/feed",
    test: "./assets/javascripts/test/test"
  },
  output: {
    path: railsJsAssetsDir,
    filename: '[name].js',
    chunkFilename: 'chunk[id].js'
  },
  plugins: [
    new ngAnnotatePlugin({
      add: true
    }),
    new CommonsChunkPlugin('core.js')
  ],
  resolve: {
    root: [path.join(__dirname, "assets/javascripts/feed")],
    extensions: ["", ".js", ".coffee", ".js.coffee"]
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.jsx$/, loaders: ['6to5', 'jsx?harmony'] }
      // Next 2 lines expose jQuery and $ to any JavaScript files loaded after rails-bundle.js
      //   in the Rails Asset Pipeline. Thus, load this one prior.
      //{ test: require.resolve("jquery"), loader: "expose?jQuery" },
      //{ test: require.resolve("jquery"), loader: "expose?$" },
      //{ test: require.resolve("react"), loader: "expose?React" }
    ]
  }
};
