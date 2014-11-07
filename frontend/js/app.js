angular.module('UserApp', ['ngMessages', 'ngRoute'])

  .config(['$routeProvider', 
   function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: './partials/form.html',
      controller: 'FormCtrl as form'
    });
    $routeProvider.when('/completed', {
      templateUrl: './partials/completed.html',
    });
  }])
  
  .controller("FormCtrl", ["$http", "$location", 
    function($http, $location) {
      this.data = {};

      var self = this;

      this.submit = function(valid) {
        if(!valid) return;

        self.submitting = true;

        $http.post("/api/register", self.data).then(function() {
          self.data = {};
          $location.path('/completed');
        }, function(response) {
          self.submitting = false;
        });
      };

      this.goBack = function () {
        $location.path('/');
      }

  }])
