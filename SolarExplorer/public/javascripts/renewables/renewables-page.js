var elfApp = angular.module('elfApp');

elfApp.controller('RenewablesController', function($scope, $http, renewableUtils) {
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
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('Error:', response.status, response.statusText);
            });
    };
});

elfApp.directive('elfRenewable', function() {
    'use strict';
    return {
        controller: 'RenewablesController',
        templateUrl: 'renewables/renewable'
    };
});
