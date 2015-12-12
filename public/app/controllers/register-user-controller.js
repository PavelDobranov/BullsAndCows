(function () {
  'use strict';

  angular.module('BullsAndCows.controllers')
    .controller('RegisterUserController', ['$location', 'userService', RegisterUserController]);

  RegisterUserController.$inject = ['$location', 'userService'];

  function RegisterUserController($location, userService) {
    var vm = this;

    vm.register = function (user, registerForm) {

      if (registerForm.$valid) {

        if (user.password !== user.confirmPassword) {
          console.log("Password != ConfirmPassword");
        } else {
          userService.register(user)
            .then(function (res) {
              console.log(res);
              //$location.path('/users/login')
            })
            .catch(function (err) {
              console.log(err);
            });
        }
      } else {
        console.log('INVALID MODEL!')
      }

    };

    vm.cancelRegister = function () {
      $location.path('/');
    };
  }
}());
