var elfApp = angular.module("elfApp");

elfApp.controller('MainController', function($scope, $http) {
    var mainController = this;
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
        controllerAs: 'mainController',
        template: '    <p><span class="caption">First: {{renewable[index]["Year"]}}</span></p>' +
            '    <p><span class="caption">Solar: {{renewable[index]["Solar (quadrillion Btu)"]}}</span></p>' +
            '    <p><span class="caption">Geothermal: {{renewable[index]["Geothermal (quadrillion Btu)"]}}</span></p>' +
            '    <p><span class="caption">Other biomass: {{renewable[index]["Other biomass (quadrillion Btu)"]}}</span></p>' +
            '    <p><span class="caption">Wind power: {{renewable[index]["Wind power (quadrillion Btu)"]}}</span></p>' +
            '    <p><span class="caption">Liquid biofuels: {{renewable[index]["Liquid biofuels (quadrillion Btu)"]}}</span></p>' +
            '    <p><span class="caption">Wood biomass: {{renewable[index]["Wood biomass (quadrillion Btu)"]}}</span></p>' +
            '    <p><span class="caption">Hydropower: {{renewable[index]["Hydropower (quadrillion Btu)"]}}</span></p>'

    };
});