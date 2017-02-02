'use strict';

angular.module('app.error', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/error', {
    templateUrl: 'views/error/error.html',
    controller: 'ErrorCtrl'
  });
}])

.controller('ErrorCtrl', ['$scope', function($scope) {

}]);