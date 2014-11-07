var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//connect to mongoose
function bootDB(callback) {
  var DEFAULT_DB = 'mongodb://localhost/demo';
  var db = process.env.MONGOHQ_URL || DEFAULT_DB;
  mongoose.connect(db, function(err) {     
    require('./User');
    callback();
  });
}

function bootExpress(callback) {
  var app = express();
  app.use(bodyParser());

  require('./routing')(app);

  callback(app);
}

module.exports = function(fn) {
  bootDB(function() {
    bootExpress(fn);
  });
}

