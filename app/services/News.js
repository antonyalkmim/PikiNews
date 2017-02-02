"use strict";

$app.factory('News',['Api', function (Api) {

    var Model = function Model(){
        this.uid        = null;
        this.author     = "";
        this.title 		= "";
        this.subtitle 	= "";
        this.imageThumb = "";
        this.content 	= "";
        this.keywords 	= "";
        this.createdAt  = null;
        this.updatedAt  = null;
    };

    return {
        Model : Model,
        getNews : function(uid) {
            return Api.get('/news/' + uid);
        },
        getRelatedNews: function(uid) {
            return Api.get('/news/related/' + uid);
        },
        searchNews : function(term, num_items, offset) {
            var uri = ['/news/s', term, num_items, offset].join("/");
            return Api.get(uri);
        },
        carouselNews :  function() {
            return Api.get("/news/carousel");
        },
        breakingNews :  function() {
            return Api.get("/news/breaking");
        }
    }
}]);