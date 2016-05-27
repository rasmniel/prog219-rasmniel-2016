var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/renewables/:id', function(request, response, next) {
    'use strict';
    response.render('renewables/' + request.params.id, {
        title: 'SolarExplorer Nielsen'
    });
});

router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'SolarExplorer Nielsen'
    });
});

router.get('/renewables/:id', function(request, response, next) {
    'use strict';
    response.render('renewables/' + request.params.id, {
        title: 'SolarExplorer Nielsen'
    });
});

router.get('/:id', function(req, res, next) {
    'use strict';
    res.render(req.params.id, {
        title: 'SolarExplorer Nielsen'
    });
});

module.exports = router;
