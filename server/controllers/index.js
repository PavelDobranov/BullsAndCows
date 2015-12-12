'use strict';

var AuthController = require('./AuthController');
var UsersController = require('./UsersController');
var GamesController = require('./GamesController');

module.exports = {
  auth: AuthController,
  users: UsersController,
  games: GamesController
};
