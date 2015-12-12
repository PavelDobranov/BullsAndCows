'use strict';

var controllers = require('../controllers');

module.exports = function(app, config) {
  app.post('/login', controllers.auth.login);
  app.post('/logout', controllers.auth.logout);

  app.post('/api/users', controllers.users.create);

  app.post('/api/games', controllers.auth.authenticate, controllers.games.create);

  app.get('*', function(req, res) {
    res.sendFile(config.rootPath + '/server/views/index.html');
  });
};
