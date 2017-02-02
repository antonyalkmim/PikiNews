'use strict';

angular.module('app.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope','$location', '$route', '$routeParams', 'News', function($scope, $location, $route, $routeParams, News) {

    $scope.slides = [];
    $scope.active = 0;

    $scope.carouselNews = []; //max 5 news
    $scope.breakingNews = []; //4 news

    $scope.worldNews = { header : {}, items: [] }; //5 news
    $scope.sportNews = { header : {}, items: [] }; //5 news
    $scope.mediaNews = { header : {}, items: [] }; //5 news

    $scope.techNews = []; //4 news

    // Carousel News
    News.carouselNews()
        .then(function(result) {
            $scope.carouselNews = result.data;
            $scope.slides = $scope.carouselNews.map(function(item, index){
                return {
                    id : index,
                    imageThumb : item.imageThumb,
                    title : item.title,
                    subtitle : item.subtitle
                }
            });
        })
        .catch(function(err){ console.log(err) });

    // Main News
    News.breakingNews()
        .then(function(result) { $scope.breakingNews = result.data; })
        .catch(function(err){ console.log(err) });

    // World News
    News.searchNews("mundo", 5, 0)
        .then(function(result) {
            $scope.worldNews = {
                header : result.data.splice(0,1)[0],
                items : result.data
            };
        })
        .catch(function(err){ console.log(err) });

    // Sports News
    News.searchNews("esporte", 5, 0)
        .then(function(result) {
            $scope.sportNews = {
                header : result.data.splice(0,1)[0],
                items : result.data
            };
        })
        .catch(function(err){ console.log(err) });

    // Media News
    News.searchNews("entretenimento", 5, 0)
        .then(function(result) {
            $scope.mediaNews = {
                header : result.data.splice(0,1)[0],
                items : result.data
            };
        })
        .catch(function(err){ console.log(err) });

    // Tech News
    News.searchNews("tecnologia", 4, 0)
        .then(function(result) { $scope.techNews = result.data; })
        .catch(function(err){ console.log(err) });

}]);