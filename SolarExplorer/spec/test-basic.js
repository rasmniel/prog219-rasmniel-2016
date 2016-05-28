describe('Elvenware Fixture and Template Cache Suite', function() {

    'use strict';

    var scope;
    var mainController;
    var $templateCache;
    var $compile;

    // Load the elfApp module from control.js with reference in layout.jade
    beforeEach(module('elfApp'));

    /*
     * instantiate the controller stand-alone, without the directive
     * We also get the Angular compiler and templateCache so we can process angular templates
     */
    beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_, _$controller_) {
        scope = _$rootScope_.$new();
        $compile = _$compile_;
        $templateCache = _$templateCache_;
        mainController = _$controller_('RenewablesController', {
            $scope: scope
        });
    }));

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('renewable.html');
    });

    it('should find the index', function() {
        expect(scope.index).toBe(0);
    });

    it('should have a getRenewable method ', function() {
        expect(scope.getRenewable).toBeDefined();
    });

    it('should be possible to access the fixture', function() {
        var spanElement = document.getElementById('renewable');
        expect(spanElement).toBeDefined();
    });

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });
    it('tests scope variable access in template loaded through raw text', function() {
        $templateCache.put('renewables/renewable',
            // jscs:disable maximumLineLength
            '<div id="renewable">' +
            '   <p><span class="caption">Solar: {{mainController.renewable[mainController.index]["Solar (quadrillion Btu)"]}}</span></p>' +
            '   <p><span class="caption">Geothermal: {{mainController.renewable[mainController.index]["Geothermal (quadrillion Btu)"]}}</span></p>' +
            '   <p><span class="caption">Other biomass: {{mainController.renewable[mainController.index]["Other biomass (quadrillion Btu)"]}}</span></p>' +
            '   <p><span class="caption">Wind power: {{mainController.renewable[mainController.index]["Wind power (quadrillion Btu)"]}}</span></p>' +
            '   <p><span class="caption">Liquid biofuels: {{mainController.renewable[mainController.index]["Liquid biofuels (quadrillion Btu)"]}}</span></p>' +
            '   <p><span class="caption">Wood biomass: {{mainController.renewable[mainController.index]["Wood biomass (quadrillion Btu)"]}}</span></p>' +
            '   <p><span class="caption">Hydropower: {{mainController.renewable[mainController.index]["Hydropower (quadrillion Btu)"]}}</span></p>' +
            '</div>');
        // jscs:enable maximumLineLength
        var element = $compile('<elf-renewable></elf-renewable>')(scope);
        scope.$digest();

        // Check that the compiled element contains the templated content
        expect(element.text()).toContain('Solar');
    });

    it('should be possible to access the renewable fixture', function() {
        var spanElement = document.getElementById('renewable');
        expect(spanElement).toBeDefined();
        expect(spanElement.innerHTML).toContain('quadrillion');
    });

    it('tests scope variable access in template loaded through fixture', function() {
        // Get element from fixture
        var el = document.getElementById('renewable');
        $templateCache.put('renewables/renewable', el);
        var element = $compile('<elf-renewable></elf-renewable>')(scope);
        scope.$digest();
        // Check that the compiled element contains the templated content
        expect(element.text()).toContain('Solar');
    });
});
