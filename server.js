var express = require('express');
var app = express();
var http = require('http').createServer(app);
var port = process.env.PORT || 3000;
var mustache = require('mustache-express');


// get the controlling routers
var controllers = require('./app/controllers/index');

// get the routes
app.use('/', controllers);


// load hot-reload-midleware using webpack
(function() {

  // Step 1: Create & configure a webpack compiler
  var webpack = require('webpack');
  var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
  var compiler = webpack(webpackConfig);

  // Step 2: Attach the dev middleware to the compiler & the server
  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));

  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));
})();


//set template angines and view routes
app.set('views', __dirname + '/views');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

// run the server
http.listen(port, function () {
  console.log('Server listening at port %d', port);
});
