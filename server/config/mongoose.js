'use strict';

var mongoose = require('mongoose');
var models = require('../data/models');

module.exports = function(config) {
  mongoose.connect(config.dbConnection);
  var db = mongoose.connection;

  db.on('error', function(err) {
    console.log('Connection error: ' + err);
  });

  db.once('open', function() {
    console.log('MongoDB up and running...');
  });

  models.UserModel.init();
  models.GameModel.init();
};
