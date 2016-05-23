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
            });
    };
});

elfApp.directive('elfSimpleFormat', function() {
    'use strict';
    return {
        controller: 'SimpleFormatController',
        templateUrl: 'simple-format'
    };
});
