/*global describe, it */


describe('Integration Tests', function() {
    'use strict';

    var elvenController, scope;
    var myController;

    beforeEach(module('elvenApp'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        elvenController = $controller('ElvenController', {
            $scope: scope
        });
        myController = $controller('MyController', {
            $scope: scope
        });
    }));

    it('should prove we loaded jasmine', function() {
        expect(true).toBe(true);
    });

    it('should get a hint of eight characters', function() {
        expect(elvenController.hint.length).toBe(8);
    });

    it('should set elvenController.hint to "My hint."', function() {
        expect(elvenController.hint).toBe('My hint.');
    });
    
    it('should prove that MyController has a method for finding the square root.', function() {
        expect(myController.getSquare(4)).toBe(2);
    });
    
    it('should prove that MyControllerhas a method, which adds numbers together.', function() {
        expect(myController.addNumbers(5, 7)).toBe(12);
    });
});

