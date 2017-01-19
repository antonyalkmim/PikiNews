
angular.module('app')

/**
 * @desc Api Services
 */
.service('Api', ["$http", "$q", 'apiUrl', function Api($http, $q, apiUrl) {
    var self = this;

    this.BASE_URL = apiUrl;

    this.baseUrl = function(url){
        self.BASE_URL = url;
    };

    //Get
    //=================================
    this.get = function (url, id) {
        var deferred = $q.defer();

        //buscar todos ou apenas o ID
        url = id ? [url,id].join('/') : url;

        $http.get(self.BASE_URL + url).then(function(res){
            deferred.resolve(res.data);
        }, function (err) {
            deferred.reject(err);
        });
        return deferred.promise;
    };

    //Delete
    //=================================
    this.delete = function (url, id, params) {
        var deferred = $q.defer();
        $http.delete([self.BASE_URL, url, id].join('/'), {
            params : params,
        }).then(function(res){
            deferred.resolve(res.data);
        }, function (err) {
            deferred.reject(err);
        });
        return deferred.promise;
    };

    //POST
    //=================================
    this.post = function (url, obj) {
        var deferred = $q.defer();

        $http.post(self.BASE_URL + url, obj).then(function(res){
            deferred.resolve(res.data);
        }, function(err){
            deferred.reject(err);
        });
        return deferred.promise;
    };

    //PUT
    //=================================
    this.put = function (url, obj) {
        var deferred = $q.defer();

        $http.put(self.BASE_URL + url, obj).then(function(res){
            deferred.resolve(res.data);
        }, function(err){
            deferred.reject(err);
        });
        return deferred.promise;
    };
}])

/**
 * @desc Util Services
 */
.service('Util', [function Util() {

    var Utils = {};

    /**
     * @desc Valida campos vazios
     * @param objeto,array
     * @returns {boolean}
     */
    Utils.isEmpty = function isEmpty(obj, arr) {
        if (arr != null && arr != undefined && obj != null) {
            for (var i = 0; i < arr.length; i++) {
                if (obj.hasOwnProperty(arr[i])) {
                    if ((obj[arr[i]]).toString() == "" || obj[arr[i]] == undefined || obj[arr[i]].length == 0) {
                        return true;
                    }
                } else {
                    return true;
                }
            }
        }
        return false;
    };

    return Utils;
}]);





