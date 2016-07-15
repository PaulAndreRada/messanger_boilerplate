var express = require('express');
var app = express();
var http = require('http').createServer(app);
var port = process.env.PORT || 3000;
var mustache = require('mustache-express');

// middleware
var hotReload = require("./app/controllers/hot-reload-middleware");

// get the controlling routers
var controllers = require('./app/controllers/index');

// use the router for any routes after /
app.use('/', controllers);

if(process.env.ENV_VARIABLE = "development"){
  hotReload(app);
}

//set template angines and view routes
app.set('views', __dirname + '/app/views');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

// run the server
http.listen(port, function () {
  console.log('Server listening at port %d', port);
});
