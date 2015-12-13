'use strict';

var Game = require('mongoose').model('Game');

module.exports = {
  create: function(game) {
    var promise = new Promise(function(resolve, reject) {
      Game.create(game, function(err, dbGame) {
        if (err) {
          reject(err);
        }

        if (!dbGame) {
          reject('Game could not be saved in database!');
        }

        resolve(dbGame);
      });
    });

    return promise;
  },
  getByState: function(state) {
    var promise = new Promise(function(resolve, reject) {
      Game.find({ state: state }, function(err, dbGames) {
        if (err) {
          reject(err);
        }

        if (!dbGames) {
          reject('Games could not be loaded from database!');
        }

        resolve(dbGames);
      });
    });

    return promise;
  }
};
