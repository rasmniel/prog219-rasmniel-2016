var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'Angular Directive Nielsen'
    });
});

router.get('/:id', function(req, res, next) {
    'use strict';
    res.render(req.params.id, {
        title: ' Angular Directive Nielsen'
    });
});

module.exports = router;
