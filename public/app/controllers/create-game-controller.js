(function () {
  'use strict';

  angular.module('BullsAndCows.controllers')
    .controller('CreateGameController', ['gamesService', CreateGameController]);

  CreateGameController.$inject = ['gamesService'];

  function CreateGameController(gamesService) {
    var vm = this;

    vm.createGame = function (number) {
      gamesService.createGame(number)
        .then(function (res) {
          console.log(res);
        })
        .catch(function (err) {
          console.log(err);
        });
    };
  }
}());
