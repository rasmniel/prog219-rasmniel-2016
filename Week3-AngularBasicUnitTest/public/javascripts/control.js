/**
 * Created by charlie on 5/6/2015.
 */

(function() {
    var app = angular.module('elvenApp', []);

    app.controller('ElvenController', function() {
        var elvenController = this;

        elvenController.hint = "My hint.";
    });
    
    app.controller('MyController', function() {
       var myController = this;
       
       myController.getSquare = function (number) {
           return Math.sqrt(number);
       };
       
       myController.addNumbers = function (a, b) {
           return a + b;
       };
    });

})();