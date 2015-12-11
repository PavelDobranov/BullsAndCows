'use strict';

var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(app, config) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(express.static(config.rootPath + '/public'));
};
