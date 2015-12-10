var express = require('express');
var router = express.Router();
// var config = require('../_config.js');
var locations = require('../../server/architecture.js');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'ARCHiTREK', apiKey: process.env.apiKey });
});

router.get('/map', function(req, res, next) {
  res.render('map', {user: "user"});
});

router.get('/index', function(req, res, next) {
  res.render('signup');
});


module.exports = router;
