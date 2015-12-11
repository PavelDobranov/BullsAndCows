'use strict';

var games = require('mongoose').model('Game');

module.exports = function(app, config) {
  app.get('/', function(req, res) {
    res.sendFile(config.rootPath + '/server/views/index.html');
  });

  app.post('/api/games', function(req, res) {
    var game = req.body;
    game.state = 'waiting';

    games.create(game, function(err, dbGame) {
      if (err) {
        console.log(err);
      }

      if (!dbGame) {
        console.log('?!?!?!?!?');
      }

      res.json(dbGame);
    });
  });
};
