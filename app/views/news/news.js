'use strict';

angular.module('app.news', ['ngRoute','ng-showdown'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/news', {
    templateUrl: 'views/news/news.html',
    controller: 'NewsCtrl'
  });
}])

.controller('NewsCtrl', ['$scope', function($scope) {

    $scope.message = "Sputinik está sendo construído!";

    var content = "![News Image](http://s2.glbimg.com/UaEgn1Hynm-NUk6Sh44_JKgBJHM=/s.glbimg.com/og/rg/f/original/2016/09/02/brasil.jpg)\n"
                + "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
                + "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
                + "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
                + "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.";
    $scope.news = {
        content : content
    };


}]);