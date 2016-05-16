var myModule = angular.module("elfApp", ['ngRoute']);

myModule.config(function($routeProvider, $locationProvider) {
    'use strict';
    $routeProvider.when("/", {
        templateUrl: "main",
        controller: "MainController",
        controllerAs: "mainController"
    }).when('/about', {
        templateUrl: "about",
        controller: "AboutController",
        controllerAs: 'aboutController'
    }).otherwise({
        redirectTo: '/'
    });
});
