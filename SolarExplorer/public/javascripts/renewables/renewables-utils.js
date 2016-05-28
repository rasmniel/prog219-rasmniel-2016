var elfApp = angular.module('elfApp');

function RenewableUtils() {
    'use strict';

    var renewables;

    this.name = 'renewableUtils';

    this.init = function(initRenewables) {
        renewables = initRenewables;
    };

    this.getItemCount = function() {
        return renewables.length;
    };

    this.getByIndex = function(index) {
        return renewables[index];
    };

    this.getByYear = function(year) {
        for (var i = 0; i < renewables.length; i++) {
            if (renewables[i].Year == year) {
                return {
                    index: i,
                    renewable: renewables[i]
                };
            }
        }
    };

    this.getYears = function() {
        return renewables.map(function(renewable) {
            return renewable.Year;
        });
    };

    this.getWood = function() {
        return renewables.map(function(renewable) {
            return {
                wood: renewable['Wood biomass (quadrillion Btu)']
            };
        });
    };

    this.getSimpleFormat = function() {
        var simpleArray = [];
        for (var i = 0; i < renewables.length; i++) {
            simpleArray.push({
                'solar': parseFloat(renewables[i]['Solar (quadrillion Btu)']),
                'geo': parseFloat(renewables[i]['Geothermal (quadrillion Btu)']),
                'other': parseFloat(renewables[i]['Other biomass (quadrillion Btu)']),
                'wind': parseFloat(renewables[i]['Wind power (quadrillion Btu)']),
                'liquid': parseFloat(renewables[i]['Liquid biofuels (quadrillion Btu)']),
                'wood': parseFloat(renewables[i]['Wood biomass (quadrillion Btu)']),
                'hydro': parseFloat(renewables[i]['Hydropower (quadrillion Btu)'])
            });
        }
        return simpleArray;
    };

    this.getSimpleStringFormat = function() {
        var simpleArray = [];
        for (var i = 0; i < renewables.length; i++) {
            simpleArray.push({
                'solar': renewables[i]['Solar (quadrillion Btu)'],
                'geo': renewables[i]['Geothermal (quadrillion Btu)'],
                'other': renewables[i]['Other biomass (quadrillion Btu)'],
                'wind': renewables[i]['Wind power (quadrillion Btu)'],
                'liquid': renewables[i]['Liquid biofuels (quadrillion Btu)'],
                'wood': renewables[i]['Wood biomass (quadrillion Btu)'],
                'hydro': renewables[i]['Hydropower (quadrillion Btu)']
            });
        }
        return simpleArray;
    };

}

elfApp.service('renewableUtils', RenewableUtils);
