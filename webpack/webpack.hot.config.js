var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

var webpack = require('webpack');

module.exports = {
  // devtool: 'inline-source-map',

  context: __dirname, //  + '/../app/assets/javascripts',
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/dev-server',
    './index.js'
  ],
  // Note, this file is not actually saved, but used by the express server
  output: {
    filename: 'express-bundle.js',
    path: '/tmp'
  },
  plugins: [
    new ngAnnotatePlugin({
      add: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  // In case you wanted to load jQuery from the CDN, this is how you would do it:
  // externals: {
  //   jquery: 'var jQuery'
  // },
  resolve: {
    root: [ path.join(__dirname, 'assets/javascripts'),
      path.join(__dirname, 'assets/stylesheets') ],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.scss', '.css', 'config.js']
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee' },

      //{ test: require.resolve('react'), loader: 'expose?React' },
      { test: /\.rt$/, loader: 'react-templates' },
      { test: /\.jsx$/, loaders: ['react-hot', 'babel', 'jsx?harmony'] },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass?outputStyle=expanded&imagePath=/assets/images'},

      // the url-loader uses DataUrls.
      // the file-loader emits files.
      { test: /\.woff$/, loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'file' },
      { test: /\.eot$/, loader: 'file' },
      { test: /\.svg$/, loader: 'file' }
    ]
  }
};
