var express = require('express');
var router = express.Router();
var Renewables = require('../models/renewables');
var connect = require('./connect.js');

router.get('/', function(request, response) {
    'use strict';
    response.send('respond with a resource');
});

router.get('/getData', function(request, response) {
    'use strict';
    if (!connect.connected) {
        var useSimple = request.query.databaseConnect;
        connect.doConnection(useSimple);
    }
    Renewables.find({}, function(err, docs) {
        if (err) {
            response.send({
                result: 'error'
            });
        }
        response.send(docs);
    });
});

router.post('/addJSON', function(request, response) {
    'use strict';
    if (!connect.connected) {
        connect.doConnection(request.body.useSimple);
    }
    for (var i = 0; i < request.body.list.length; i++) {
        var data = request.body.list[i];
        var newRenewables = new Renewables({
            Year: data.Year,
            Solar: data['Solar (quadrillion Btu)'],
            Geothermal: data['Geothermal (quadrillion Btu)'],
            OtherBiomass: data['Other biomass (quadrillion Btu)'],
            WindPower: data['Wind power (quadrillion Btu)'],
            LiquidBiofuels: data['Liquid biofuels (quadrillion Btu)'],
            WoodBiomass: data['Wood biomass (quadrillion Btu)'],
            Hydropower: data['Hydropower (quadrillion Btu)'],
        });
        newRenewables.save();
        console.log('Saved: ' + data);
    }
    response.send({
        result: 'success'
    });
});

router.get('/clear', function(request, response) {
    'use strict';
    if (!connect.connected) {
        connect.doConnection(request.body.useSimple);
    }
    Renewables.remove({}, function(err, removeResponse) {
        console.log('collection removed');
        response.send({
            result: 'success: ' + removeResponse.result.n + ' items removed!'
        });
    });
});

module.exports = router;
