var elfApp = angular.module('elfApp');

elfApp.controller('HomeController', function($scope, $http) {
    'use strict';

    $scope.mainData = 'HomeController MainData';
    $scope.resultFull = '/database/saveSettings';
    $scope.resultMirror = '/database/saveSettings';
    $scope.formData = {
        'dataType': 'JSON',
        'dataSource': 'Local MongoDb',
        'comment': 'Comment'
    };
    $scope.list = ['foo'];
    $scope.text = 'hello';

    $scope.execute = function() {
        $scope.list = null;
        $scope.text = null;
        $scope.resultMirror = '';
        $scope.resultFull = '';
        if ($scope.formData.dataType === 'JSON') {
            $http.get('data/Renewable.json').then(function(result) {
                display(result);
            });
        }
        else if ($scope.formData.dataType === 'Database') {
            var useSimple = $scope.formData.dataSource !== 'MLab';
            loadData(useSimple);
        }
    };

    function loadData(useSimple) {
        $http.get('/renewables/getData', {
            params: {
                databaseConnect: useSimple
            }
        }).then(function(result) {
            display(result);
        });
    }

    function display(result) {
        $scope.list = result.data;
        $scope.resultFull = JSON.stringify(result.data, null, 4);
        $scope.resultMirror = 'Status: ' + JSON.stringify(result.status, null, 4);
    }

    $scope.insertJSON = function() {
        if ($scope.list.length > 0) {
            var postData = {
                list: $scope.list,
                useSimple: $scope.formData.dataSource !== 'MLab'
            };
            $http.post('/renewables/addJSON', postData).then(function(result) {
                $scope.resultMirror = JSON.stringify(result.data, null, 4);
                $scope.resultFull = JSON.stringify(result, null, 4);
            }, function(err) {
                console.log(err);
            });
        }
    };

    $scope.clear = function() {
        $http.get('/renewables/clear').then(function(result) {
            $scope.resultMirror = JSON.stringify(result.data, null, 4);
            $scope.resultFull = JSON.stringify(result, null, 4);
        });
    };

    $scope.submit = function() {
        $http.post('/database/updateSettings', $scope.formData).then(function(result) {
            $scope.resultMirror = JSON.stringify(result.data.query, null, 4);
            $scope.resultFull = JSON.stringify(result, null, 4);
        }, function(err) {
            console.log(err);
        });
        console.log($scope.formData);
    };

    function readSettings() {
        $http.get('/database/getSettings').then(function(result) {
            $scope.resultFull = JSON.stringify(result, null, 4);
            $scope.resultMirror = JSON.stringify(result.data.settings, null, 4);
            $scope.formData = {
                'dataType': result.data.settings.dataType,
                'dataSource': result.data.settings.dataSource,
                'comment': result.data.settings.comment
            };
        }, function(err) {
            console.log(err);
        });
        console.log($scope.formData);
    }
    // readSettings();
});