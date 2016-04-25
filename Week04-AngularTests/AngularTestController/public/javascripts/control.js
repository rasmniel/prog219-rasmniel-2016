/**
 * Created by charlie on 4/24/16.
 */

var elfApp = angular.module('elfApp', []);

elfApp.controller('MainController', function($scope) {
    'use strict';
    $scope.scopeData = 'We will need to use Scope when creating controller in test';
    $scope.getNine = function() {
        return 9;
    };
    
    $scope.getSeven = function() {
        return 7;  
    };
    
    $scope.add = function(num1, num2) {
        return num1 + num2;    
    };
});
