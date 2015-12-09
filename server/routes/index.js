var express = require('express');
var router = express.Router();
var config = require('../_config.js');
var locations = require('../../server/architecture.js');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'ARCHiTREK', apiKey: config.google.apiKey });
});

router.get('/map', function(req, res, next) {
  res.render('map', {user: "user"});
});

router.get('/index', function(req, res, next) {
  res.render('signup');
});




// {% if locations %}
//   {% for location in locations %}
//     <p>{{location|function}}</p>
//   {% endfor %}
// {% endif %}



module.exports = router;
