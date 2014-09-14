'use strict';
angular.module('letusgoApp')
    .controller('AddCatagaryCtrl', function ($scope, catagaryService) {
        $scope.add = function (catagary) {
            catagaryService.addCatagary(catagary);
        };
    });
