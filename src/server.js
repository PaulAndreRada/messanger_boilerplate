var express = require('express')
var path = require('path')
//var api = require('./api')
var app = express()
var mustache = require('mustache-express')

// get the controlling routers
var controllers = require('./controllers/index');
// get the routes
app.use('/', controllers);

app.use('/test', function(req, res) {
  res.send('Hello, Hot Reload again eh!')
})

// use later
//app.get('/api', api)

// add the static directory middleware
app.use('/', express.static(path.join(__dirname, 'static')))

//set template angines and view routes
app.set('views', path.join( __dirname,'views'));
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

//run the server
var server = app.listen(1337, '127.0.0.1', function () {
  var port = server.address().port || 3000
  var host = server.address().address
  console.log('Application started at http://' + host + ':' + port)
})

module.exports = app
