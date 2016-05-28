var elfApp = angular.module('elfApp');

elfApp.controller('EnergySelectorController', function($scope, $http, msnTypes) {
    'use strict';
    var energySelectorController = this;
    $scope.selectorData = 'Data for energy selector page.';
    $scope.index = 0;
    $scope.chosenMSN = 'Total Fossil Fuels Production';

    $scope.setChosenMNS = function(MSN) {
        $scope.chosenMSN = MSN;
        $scope.getFilteredEnergyTypes();
    };

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

    $scope.getFilteredEnergyTypes = function() {
        $http.get('data/EnergyTypes.json')
            .then(function(response) {
                var energyTypes = response.data;
                var filteredEnergyTypes = [];
                for (var i = 0; i < energyTypes.length; i++) {
                    if (energyTypes[i].Description === $scope.chosenMSN) {
                        filteredEnergyTypes.push(energyTypes[i]);
                    }
                }
                $scope.energyTypes = filteredEnergyTypes;
                $scope.energyCount = energyTypes.length;
                $scope.filteredCount = filteredEnergyTypes.length;
            }, function errorCallback(response) {
                console.log('Error:', response.status, response.statusText);
            });
    };

    $scope.getEnergyTypes();
    $scope.getFilteredEnergyTypes();
});
