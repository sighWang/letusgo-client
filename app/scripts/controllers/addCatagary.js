'use strict';
angular.module('yeomanLetusgoApp')
    .controller('AddCatagaryCtrl', function ($scope, catagaryService) {
        $scope.add = function (catagary) {
            catagaryService.addCatagary(catagary);
        };
    });
