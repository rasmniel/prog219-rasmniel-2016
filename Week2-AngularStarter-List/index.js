(function() {

    var app = angular.module('main', []);

    app.controller('ListControl', function($scope) {

        'use strict';

        var listData = [{
            text: 'Attend class at BC',
            done: false
        }, {
            text: 'Complete JavaScript programs',
            done: false
        }];

        $scope.todoList = listData;
        $scope.listItem = "New Item";
        $scope.itemCount = getItemCount();
        
        $scope.addTodo = function() {
            $scope.todoList.push({
                text : $scope.listItem,
                done : false
            });
            $scope.listItem = '';
            $scope.itemCount = getItemCount();
        };

        function getItemCount() {            
            var count = 0;
            angular.forEach($scope.todoList, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };
    });
})();