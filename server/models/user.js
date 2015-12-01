var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create User Schema
var User = new Schema({
  oauthID: Number,
  name: String,
  created: Date
});


module.exports = mongoose.model('users', User);