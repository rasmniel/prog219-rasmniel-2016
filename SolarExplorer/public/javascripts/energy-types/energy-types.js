var elfApp = angular.module('elfApp');

elfApp.controller('EnergyTypesController', function($scope, $http, msnTypes) {
    'use strict';
    $scope.energyData = 'Data for energy types page.';
    $scope.index = 0;

    $scope.getEnergyTypes = function() {
        $http.get('data/EnergyTypes.json')
            .then(function(response) {
                $scope.msnTypes = msnTypes(response.data);
                $scope.energyTypes = response.data;
                $scope.energyCount = response.data.length;
            }, function errorCallback(response) {
                console.log('Error:', response.status, response.statusText);
            });
    };
});

elfApp.directive('energyTypes', function() {
    'use strict';
    return {
        controller: 'EnergyTypesController',
        templateUrl: 'energy-types/energy-types'
    };
});
