var express = require('express');
var router = express.Router();
var config = require('../_config.js');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'ARCHiTREK', apiKey: config.google.apiKey });
});

router.get('/map', function(req, res, next) {
  res.render('map', {user: "user"});
});

router.get('/index', function(req, res, next) {
  res.render('signup');
});

module.exports = router;
