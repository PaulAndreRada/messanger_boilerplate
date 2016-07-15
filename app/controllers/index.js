//import Express,Router from 'express';
var express = require('express');
var router = express.Router();

// define the home page route
router.get('/', function(req, res) {
  res.render('index');
});


// define 404s, 400s, and 500s

module.exports = router;
