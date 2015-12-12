(function() {
  'use strict';

  angular.module('BullsAndCows.controllers')
    .controller('RegisterUserController', ['$location', 'userService', RegisterUserController]);

  RegisterUserController.$inject = ['$location', 'userService'];

  function RegisterUserController($location, userService) {
    var vm = this;

    vm.register = function(user) {
      userService.register(user)
        .then(function(res) {
          console.log(res);
          //$location.path('/users/login')
        })
        .catch(function(err) {
          console.log(err);
        });
    };

    vm.cancelRegister = function() {
      $location.path('/');
    };
  }
}());
