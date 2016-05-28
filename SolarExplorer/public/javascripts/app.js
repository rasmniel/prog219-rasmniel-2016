var myModule = angular.module('elfApp', ['ngRoute']);

myModule.config(function($routeProvider, $locationProvider) {
    'use strict';

    $routeProvider.when('/', {
        templateUrl: 'home',
        controller: 'HomeController'
    }).when('/renewables', {
        templateUrl: 'renewables/renewables-page',
        controller: 'RenewablesController'
    }).when('/simple-format', {
        templateUrl: 'renewables/simple-format-page',
        controller: 'SimpleFormatController'
    }).when('/renewable-by-year', {
        templateUrl: 'renewables/renewable-by-year-page',
        controller: 'RenewableByYearController'
    }).when('/energy-types', {
        templateUrl: 'energy-types/energy-types-page',
        controller: 'EnergyTypesController'
    }).when('/energy-selector', {
        templateUrl: 'energy-types/energy-selector-page',
        controller: 'EnergySelectorController'
    }).when('/about', {
        templateUrl: 'about',
        controller: 'AboutController'
    }).otherwise({
        redirectTo: '/'
    });
});
