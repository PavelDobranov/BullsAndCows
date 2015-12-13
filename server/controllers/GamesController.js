'use strict';

var games = require('../data/games');

module.exports = {
  create: function(req, res) {
    var game = req.body;

    game.firstPlayer = req.user.username;
    game.state = 'open';

    games
      .create(game)
      .then(function(game) {
        res
          .status(200)
          .json({ id: game._id, message: 'Game created successfully' });
      })
      .catch(function(err) {
        res
          .status(400)
          .json({ errorMessage: err });
      });
  },
  getByState: function(req, res){
    var gameState = req.query.state;
    console.log('pesho');
    games
      .getByState(gameState)
      .then(function(games) {
        res
          .status(200)
          .json(games);
      })
      .catch(function(err) {
        res
          .status(400)
          .json({ errorMessage: err });
      });
  }

};
