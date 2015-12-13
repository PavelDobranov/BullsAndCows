(function () {
  'use strict';

  angular.module('BullsAndCows.controllers')
    .controller('LoginUserController', ['$location', 'userService', LoginUserController]);

  LoginUserController.$inject = ['$location', 'userService'];

  function LoginUserController($location, userService) {
    var vm = this;
    vm.login = function (user, registerForm) {

      userService.login(user)
        .then(function (res) {
          console.log(res);
          $location.path('/')
        })
        .catch(function (err) {
          console.log(err);
        });
    };
  }
}());

