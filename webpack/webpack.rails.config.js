var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
require('coffee-script/register');

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
      { test: /\.html$/, loaders: ['ngtemplate?relativeTo=assets/javascripts', 'html'] },
      { test: /\.html\.hamlc$/, loaders: ['ngtemplate?relativeTo=assets/javascripts', 'haml'] },
      { test: /\.js\.hamlc$/, loader: 'hamlc' },
      { test: /\.jsx$/, loaders: ['babel', 'jsx?harmony'] }
    ]
  }
};
