'use strict';

var path = require('path');

var rootPath = (path.normalize(__dirname + '/../..'));

module.exports = {
  development: {
    port: 8080,
    dbConnection: 'mongodb://admin:12345@ds029605.mongolab.com:29605/bullsandcowsdev',
    rootPath: rootPath
  },
  production: {
    port: process.env.PORT,
    dbConnection: '',
    rootPath: rootPath
  }
};
