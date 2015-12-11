'use strict';

var mongoose = require('mongoose');
var Game = require('../data/models/Game');

module.exports = function(config) {
  mongoose.connect(config.dbConnection);
  var db = mongoose.connection;

  db.on('error', function(err) {
    console.log('Connection error: ' + err);
  });

  db.once('open', function() {
    console.log('MongoDB up and running...');
  });

  Game.init();
};
