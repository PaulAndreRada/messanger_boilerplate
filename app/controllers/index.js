//import Express,Router from 'express';
var express = require('express');
var router = express.Router();

// add static here?
// middleware that is specific to this router
/*
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());

  next();
});
*/

// define the home page route
router.get('/', function(req, res) {
  res.render('index');
});

// define the about route
router.get('/register', function(req, res) {
  res.render('register');
});

module.exports = router;
