'use strict';

angular.module('app.news', ['ngRoute','ng-showdown'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/news/:uid', {
    templateUrl: 'views/news/news.html',
    controller: 'NewsCtrl'
  });
}])

.controller('NewsCtrl', ['$scope', '$location', '$route', '$routeParams', 'News',
    function($scope, $location, $route, $routeParams, News) {

    $scope.news = { };
    $scope.relatedNews = [];

    if (!$routeParams.uid) {
        $location.path("/error");
        return;
    }

    // Load news from api
    //=========================
    News.getNews($routeParams.uid)
        .then(function(result) {
            if (!result.success) {
                $location.path("/error");
                return;
            }
            $scope.news = result.data;
            loadRelatedNews(result.data.uid);
        })
        .catch(function(err){
            console.log(err);
        });


    function loadRelatedNews(uid) {
        News.getRelatedNews(uid)
            .then(function(result) {
                if (result.data) {
                    $scope.relatedNews = result.data;
                }
            })
            .catch(function(err){ console.log(err) });
    }


}]);