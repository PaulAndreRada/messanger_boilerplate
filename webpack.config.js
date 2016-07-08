module.exports = {
  entry: [
    './components/main.jsx'
  ],
  output: {
    path: __dirname,
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
