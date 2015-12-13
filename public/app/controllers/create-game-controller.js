(function() {
  'use strict';

  angular.module('BullsAndCows.controllers')
    .controller('CreateGameController', ['$http', function($http) {
      var vm = this;

      vm.createGame = function(number) {
        var game = {
          firstPlayerNumber: number
        };

        $http
          .post('/api/games', game)
          .then(function(res) {
            console.log(res);
          });
      };
    }]);
}());
