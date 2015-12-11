(function() {
  'use strict';

  angular.module('BullsAndCows.controllers', []);
  angular.module('BullsAndCows', ['ngRoute', 'BullsAndCows.controllers']);

  angular.module('BullsAndCows').config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home.html'
      })
      .when('/games/create', {
        templateUrl: 'app/views/game-create.html',
        controller: 'CreateGameController',
        controllerAs: 'vm'
      });
  }]);
}());
