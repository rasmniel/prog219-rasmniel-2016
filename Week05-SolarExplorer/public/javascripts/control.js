$(document).ready(function() {
    'use strict';
});

var elfApp = angular.module('elfApp', []);

elfApp.controller('MainController', function($scope) {
    'use strict';
    $scope.marie = {
        firstName: 'Marie',
        lastName: 'Curie',
        city: 'Paris',
        country: 'France'
    }
});

elfApp.directive('bar', function() {
    'use strict';
    return {
        link: function() {
            console.log('bar');
        },
        template: '<p>bar</p>'
    }
})

elfApp.directive('elfMarie', function() {
    'use strict';
    return {
        controller: 'MainController',
        templateUrl: 'marie'
    }
});