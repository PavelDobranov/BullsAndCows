(function () {
  'use strict';

  angular.module('BullsAndCows.controllers', []);
  angular.module('BullsAndCows.services', []);
  angular.module('BullsAndCows', ['ngRoute', 'BullsAndCows.controllers','BullsAndCows.services']);

  angular.module('BullsAndCows').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home.html'
      })
      .when('/games/create', {
        templateUrl: 'app/views/game-create.html',
        controller: 'CreateGameController',
        controllerAs: 'vm'
      })
      .when('/users/register',{
        templateUrl: 'app/views/register-user.html',
        controller: 'RegisterUserController',
        controllerAs: 'vm'
      })
      .when('/users/login',{
        templateUrl: 'app/views/login-user.html',
        controller: 'LoginUserController',
        controllerAs: 'vm'
      });
  }]);
}());
