var express = require('express');
var app = express();
var http = require('http').createServer(app);
var port = process.env.PORT || 3000;
var mustache = require('mustache-express');


// get the controlling routers
var controllers = require('./app/controllers/index');

// get the routes
app.use('/', controllers);

// pass the static files into a /static diectory
//app.use('/static', express.static('./public/'));

//set template angines and view routes
app.set('views', __dirname + '/views');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

// run the server
http.listen(port, function () {
  console.log('Server listening at port %d', port);
});
