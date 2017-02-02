'use strict';

angular.module('app.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/s/:term', {
    templateUrl: 'views/search/search.html',
    controller: 'SearchCtrl'
  });
}])

.controller('SearchCtrl', ['$scope', '$route', '$routeParams', 'News', function($scope, $route, $routeParams, News) {

    $scope.searchNews = [];
    $scope.breakingNews = [];

    // Search News
    News.searchNews($routeParams.term, 20, 0)
        .then(function(result) {
            $scope.searchNews = result.data;
        })
        .catch(function(err){ console.log(err) });

    // Main News
    News.breakingNews()
        .then(function(result) { $scope.breakingNews = result.data; })
        .catch(function(err){ console.log(err) });


}]);