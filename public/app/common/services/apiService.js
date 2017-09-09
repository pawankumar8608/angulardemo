'use strict';

app.service('apiService', ['$http', '$q', function($http, $q){


    this.callGetAPI = function(url, method, params, data){
        var deferred = $q.defer();
        var headers ={
            'Content-Type': 'application/json; charset=utf-8',
        }
        $http({url:url, method:method, headers:headers, params:params, data:data})
            .success(function(res){
               if(res &&  res=='success'){
                   deferred.reject(res);
               }else{
                   deferred.resolve(res);
               }
            }).error(function(err){
                   deferred.resolve(err);
        });
             return deferred.promise;
    };

}]);