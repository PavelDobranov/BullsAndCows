(function() {
  'use strict';

  angular.module('BullsAndCows.controllers')
    .controller('CreateGameController', ['$http', function($http) {
      var vm = this;

      vm.createGame = function(number) {
        var game = {
          firstPlayerNumber: number,
          firstPlayer: 'Pavel'
        };

        $http
          .post('/api/games', game)
          .then(function(response) {
            console.log(response);
          });
      };
    }]);
}());
