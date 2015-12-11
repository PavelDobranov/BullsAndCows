'use strict';

var mongoose = require('mongoose');

module.exports.init = function() {
  var gameSchema = mongoose.Schema({
    firstPlayer: { type: String, required: true },
    secondPlayer: { type: String },
    firstPlayerNumber: { type: String, required: true },
    secondPlayerNumber: { type: String },
    state: { type: String, required: true }
  });

  mongoose.model('Game', gameSchema);
};
