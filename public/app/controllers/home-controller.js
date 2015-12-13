(function () {
  'use strict';

  angular.module('BullsAndCows.controllers')
    .controller('HomeController', ['$http','gamesService',
      function HomeController ($http, gamesService) {
      var vm = this;
      console.log('pesho from controller');
      gamesService.getFreeGames()
        .then(function (res) {
          console.log(res);
          vm.games = res;
          vm.games = [{
            firstPlayer: 'Pavel',
            secondPlayer: 'Zhenya'
          }]
        }, function (err) {
          console.log(err);
        })
    }]);
}());
