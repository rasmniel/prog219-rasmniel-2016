var elfApp = angular.module("elfApp");

elfApp.controller('MainController', function($scope, $http) {
    $scope.mainData = 'MainData';
    $scope.index = 0;
    $scope.getRenewable = function() {
        console.log('getRenewable');
        $http.get('data/Renewable.json')
            .then(function(response) {
                console.log(response.data[0]);
                $scope.renewable = response.data;
            });
    };
});

elfApp.directive('elfRenewable', function() {
    'use strict';
    return {
        controller: 'MainController',
        templateUrl: 'renewable'
    };
});

elfApp.directive('elfSimpleFormat', function() {
    'use strict';
    return {
        controller: 'MainController',
        templateUrl: 'simple-format'
    };
});