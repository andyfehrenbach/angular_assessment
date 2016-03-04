var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/hero.html',
            controller: 'HeroController'
        })
        .when('/list', {
            templateUrl: '/views/templates/list.html',
            controller: 'ListController'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);
