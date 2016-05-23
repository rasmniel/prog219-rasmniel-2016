var elfApp = angular.module("elfApp");

elfApp.controller('RenewableByYearController', function($scope, $http, renewableUtils) {
    'use strict';
    $scope.mainData = 'Data for main page.';
    $scope.index = 0;
    $scope.userYearInput = 2015;
    $scope.getRenewableByYear = function() {
        // console.log('getRenewable');
        $http.get('data/Renewable.json')
            .then(function(res) {
                renewableUtils.init(res.data);
                $scope.renewable = res.data;
                $scope.renewableUtils = renewableUtils;
                $scope.simpleFormat = renewableUtils.getSimpleFormat();
                $scope.getByYear($scope.userYearInput);
            });
    };

    $scope.getByYear = function(year) {
        var renewableData = $scope.renewableUtils.getByYear(year);
        $scope.index = renewableData.index;
        $scope.renewableByYear = renewableData.renewable;
        return $scope.renewableByYear;
    };
});

elfApp.directive('elfRenewableByYear', function() {
    'use strict';
    return {
        controller: 'RenewableByYearController',
        templateUrl: 'renewable-by-year'
    };
});
