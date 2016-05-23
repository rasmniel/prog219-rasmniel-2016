var elfApp = angular.module("elfApp");

elfApp.controller('MainController', function($scope, $http, renewableUtils) {
    'use strict';
    $scope.mainData = 'Data for main page.';
    $scope.index = 0;

    $scope.getRenewable = function() {
        // console.log('getRenewable');
        $http.get('data/Renewable.json')
            .then(function(res) {
                renewableUtils.init(res.data);
                $scope.renewable = res.data;
                $scope.renewableUtils = renewableUtils;
                $scope.simpleFormat = renewableUtils.getSimpleFormat();
            });
    };

    $scope.getRenewableOld = function() {
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
        templateUrl: 'renewables/renewable'
    };
});
