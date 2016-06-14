var elfApp = angular.module('elfApp');

elfApp.controller('RenewableByYearController', function($scope, $http, renewableUtils) {
    'use strict';
    $scope.byYearData = 'Data for by year page.';
    $scope.index = 0;
    $scope.userYearInput = 2015;
    $scope.getRenewableByYear = function() {
        // console.log('getRenewable');
        $http.get('data/Renewable.json')
            .then(function(res) {
                // Clamp userYearInput between 2006 and 2016.
                $scope.userYearInput = Math.min(Math.max($scope.userYearInput, 2006), 2016);
                renewableUtils.init(res.data);
                $scope.renewable = res.data;
                $scope.renewableUtils = renewableUtils;
                $scope.simpleFormat = renewableUtils.getSimpleFormat();
                $scope.getByYear($scope.userYearInput);
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('Error:', response.status, response.statusText);
            });
    };

    $scope.getByYear = function(year) {
        var renewableData = $scope.renewableUtils.getByYear(year || $scope.userYearInput);
        $scope.index = renewableData.index;
        $scope.renewableByYear = renewableData.renewable;
        return $scope.renewableByYear;
    };
});

elfApp.directive('elfRenewableByYear', function() {
    'use strict';
    return {
        controller: 'RenewableByYearController',
        templateUrl: 'renewables/renewable-by-year'
    };
});
