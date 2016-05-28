var express = require('express');
var router = express.Router();

router.get('/energy-types/:id', function(request, response, next) {
    'use strict';
    response.render('energy-types/' + request.params.id, {
        title: 'SolarExplorer',
        author: 'Rasmus Nielsen'
    });
});

router.get('/renewables/:id', function(request, response, next) {
    'use strict';
    response.render('renewables/' + request.params.id, {
        title: 'SolarExplorer',
        author: 'Rasmus Nielsen'
    });
});

router.get('/:id', function(req, res, next) {
    'use strict';
    res.render(req.params.id, {
        title: 'SolarExplorer',
        author: 'Rasmus Nielsen'
    });
});

router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'SolarExplorer',
        author: 'Rasmus Nielsen'
    });
});

module.exports = router;
