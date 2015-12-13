(function () {
  'use strict';

  angular.module('BullsAndCows.services')
    .factory('gamesService', gamesService);

  gamesService.$inject = ['$http', '$q'];

  function gamesService($http, $q) {
    var url = '/api/games?state=open';

    function getFreeGames() {
      var deferred = $q.defer();

      $http
        .get(url)
        .then(function (res) {
          console.log(res.data);
          deferred.resolve(res.data);
        })
        .catch(function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }

    function createGame(number) {
      var deferred = $q.defer();
      var game = {
        firstPlayerNumber: number
      };

      $http
        .post('/api/games', game)
        .then(function (res) {
          deferred.resolve(res.data);
        })
        .catch(function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }

    return {
      getFreeGames: getFreeGames,
      createGame: createGame
    };
  }
}());
