/**
 * Created by charlie on 4/25/16.
 */


describe('Test MainController Suite', function() {

    'use strict';

    var mainController;
    var scope;

    beforeEach(module('elfApp'));

    beforeEach(inject(function(_$controller_, _$rootScope_) {
        scope = _$rootScope_.$new();
        mainController = _$controller_('MainController', {
            $scope: scope
        });
    }));

    it('can access controllerAs variable', function() {
        expect(scope.scopeData).toContain('Scope when creating');
    });

    it('can get nine', function() {
        expect(scope.getNine()).toBe(9);
    });

    it('can get seven', function() {
        expect(scope.getSeven()).toBe(7);
    });

    it('can add two numbers together', function() {
        var num1 = 5;
        var num2 = 7;
        var result = num1 + num2;
        expect(scope.add(num1, num2)).toBe(result);
    });
});
