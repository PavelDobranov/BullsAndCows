(function () {
  angular.module('BullsAndCows.services')
    .factory('userService', userService);

  userService.$inject = ['$http', '$q'];
  function userService($http, $q) {

    function create(user) {
      var deferred = $q.defer();
      var url = '/api/users';

      $http
        .post(url, user)
        .then(function (res) {
          deferred.resolve(res)
        })
        .catch(function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }

    return {
      register: create
    }
  }
}());
