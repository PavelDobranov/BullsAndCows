(function() {
  'use strict';

  angular.module('BullsAndCows.services')
    .factory('userService', userService);

  userService.$inject = ['$http', '$q'];

  function userService($http, $q) {
    var url = '/api/users';

    function create(user) {
      var deferred = $q.defer();

      $http
        .post(url, user)
        .then(function(res) {
          console.log(res);
          deferred.resolve(res);
        })
        .catch(function(err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }

    return {
      register: create
    };
  }
}());
