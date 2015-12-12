'use strict';

var users = require('../data/users');

module.exports = {
  create: function(req, res) {
    var user = req.body;

    users
      .create(user)
      .then(function(user) {
        res
          .status(200)
          .json({ username: user.username, message: 'Registration successful' });
      })
      .catch(function(err) {
        res
          .status(400)
          .json({ errorMessage: err });
      });
  }
};
