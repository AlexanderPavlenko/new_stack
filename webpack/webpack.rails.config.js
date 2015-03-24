var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

var railsJsAssetsDir = '../app/assets/javascripts';

module.exports = {
  context: __dirname,
  entry: {
    dummy: './assets/javascripts/dummy'
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
    root: [path.join(__dirname, 'assets/javascripts/feed')],
    extensions: ['', '.js', '.coffee', '.js.coffee']
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee' },
      { test: /\.rt$/, loader: 'react-templates' },
      { test: /\.jsx$/, loaders: ['babel', 'jsx?harmony'] }
      // Next 2 lines expose jQuery and $ to any JavaScript files loaded after rails-bundle.js
      //   in the Rails Asset Pipeline. Thus, load this one prior.
      //{ test: require.resolve('jquery'), loader: 'expose?jQuery' },
      //{ test: require.resolve('jquery'), loader: 'expose?$' },
      //{ test: require.resolve('react'), loader: 'expose?React' }
    ]
  }
};
