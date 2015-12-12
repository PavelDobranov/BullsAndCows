'use strict';

var mongoose = require('mongoose');

module.exports.init = function() {
  var userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });

  userSchema.method({
    verifyPassword: function(password) {
      return password === this.password;
    }
  });

  mongoose.model('User', userSchema);
};
