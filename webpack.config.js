var path = require('path'),
  HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval',
  entry: [
    './src/components/main.jsx'
  ],
  output: {
    path: path.join(__dirname, 'build', 'static'),
    filename: 'application.js',
    publicPath: '/'
  },
  plugins: [
    new HTMLWebpackPlugin({title: 'Hot Reload'})
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
