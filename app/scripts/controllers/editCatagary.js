'use strict';

angular.module('letusgoApp')
    .controller('EditCatagaryCtrl', function ($scope, catagaryService) {
        $scope.catagary = catagaryService.getStoreCatagary();

        $scope.edit = function (catagary) {
            catagaryService.editCatagary(catagary);
        };
    });
