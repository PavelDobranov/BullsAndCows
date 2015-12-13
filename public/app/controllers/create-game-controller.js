(function () {
  'use strict';

  angular.module('BullsAndCows.controllers')
    .controller('CreateGameController', ['$http', CreateGameController]);

  CreateGameController.$inject = ['$http'];

  function CreateGameController($http) {
    var vm = this;

    vm.createGame = function (number) {
      var game = {
        firstPlayerNumber: number
      };

      $http
        .post('/api/games', game)
        .then(function (res) {
          console.log(res);
        });
    };
  }
}());
