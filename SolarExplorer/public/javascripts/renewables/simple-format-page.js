var elfApp = angular.module("elfApp");

elfApp.controller('SimpleFormatController', function($scope, $http, renewableUtils) {
    'use strict';
    $scope.simpleFormatData = 'Data for simple format page.';
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

elfApp.directive('elfSimpleFormat', function() {
    'use strict';
    return {
        controller: 'SimpleFormatController',
        templateUrl: 'renewables/simple-format'
    };
});
