var path = require("path");
//var AngularPlugin = require('angular-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

var railsJsAssetsDir = "../app/assets/javascripts";

module.exports = {
  context: __dirname,
  entry: [
    "./assets/javascripts/feed/feed"
  ],
  output: {
    filename: 'feed.js',
    path: railsJsAssetsDir
  },
  plugins: [
    //new AngularPlugin(),
    new ngAnnotatePlugin({
      add: true
    })
  ],
  externals: {
    angular: "angular"
  },
  resolve: {
    root: [path.join(__dirname, "assets/javascripts/feed")],
    extensions: ["", ".js", ".coffee", ".js.coffee"]
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee-loader" },
      //{ test: /\.jsx$/, loaders: ['es6', 'jsx?harmony'] },
      // Next 2 lines expose jQuery and $ to any JavaScript files loaded after rails-bundle.js
      //   in the Rails Asset Pipeline. Thus, load this one prior.
      //{ test: require.resolve("jquery"), loader: "expose?jQuery" },
      //{ test: require.resolve("jquery"), loader: "expose?$" },
      //{ test: require.resolve("react"), loader: "expose?React" }
    ]
  }
};
