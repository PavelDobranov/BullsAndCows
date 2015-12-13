(function () {
  'use strict';

  angular.module('BullsAndCows.controllers')
    .controller('HomeController', ['gamesService', HomeController]);

  HomeController.$inject = ['gamesService'];

  function HomeController(gamesService) {
    var vm = this;
    gamesService.getFreeGames()
      .then(function (res) {
        vm.games = res;
        vm.games = [{
          firstPlayer: 'Pavel',
          secondPlayer: 'Zhenya'
        }]
      }, function (err) {
        console.log(err);
      })
  }
}());
