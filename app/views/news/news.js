'use strict';

angular.module('app.news', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/news', {
    templateUrl: 'views/news/news.html',
    controller: 'NewsCtrl'
  });
}])

.controller('NewsCtrl', ['$scope', function($scope) {

    $scope.message = "Sputinik está sendo construído!"

}]);