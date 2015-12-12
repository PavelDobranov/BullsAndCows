(function () {
  'use strict';

  angular.module('BullsAndCows.controllers')
    .controller('LoginUserController', ['$location', '$http','$q', 'userService', LoginUserController]);

  LoginUserController.$inject = ['$location', '$http','$q', 'userService'];

  function LoginUserController($location, $http, $q, userService) {
    var vm = this;

    vm.login = function (user, registerForm) {
      var url = '/login';
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
  }
}());

