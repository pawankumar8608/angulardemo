var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider){

    $httpProvider.defaults.headers.common = {};
	$httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};



    $locationProvider.html5Mode({
        enabled    : true,
        requireBase: false
    });

    $routeProvider
   
    .when('/welcome', {
            templateUrl : '/app/admin/views/viewUser.html',
            controller  : 'viewUserCtrl'
    })

}]);

