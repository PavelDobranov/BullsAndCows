'use strict';

module.exports = {
  create: function(req, res) {
    console.log(req.body, req.user);
  }
};
