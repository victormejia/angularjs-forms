angular.module('UserApp')
  
  .directive('passwordValidator', function () {
    return {
      require : 'ngModel',
      link : function (scope, elem, attrs, ngModel) {
        ngModel.$validators.password = function (password) {
          console.log(/\d+/.test(password));
          return /\d+/.test(password);
        }
      }
    }
  })

  .directive('usernameAvailableValidator', ['$http', function ($http) {
    return {
      require : 'ngModel',
      link : function (scope, element, attrs, ngModel) {
        ngModel.$asyncValidators.usernameAvailable = function (username) {
          console.log(username);
          return $http.get('/api/valid?u=' + username);
        }
      }
    }
  }])