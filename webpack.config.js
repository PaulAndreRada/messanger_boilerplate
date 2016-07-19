const webpack = require('webpack');
const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'app', 'pages'),
  style: path.join(__dirname, 'app', 'stylesheets')
}

module.exports = {
  context: __dirname,
  entry: [
    // Add the client which connects to our middleware
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    // And then the actual application
    PATHS.app
  ],

  output: {
    path: __dirname,
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};
