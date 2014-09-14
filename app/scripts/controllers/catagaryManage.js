'use strict';

angular.module('letusgoApp')
    .controller('CatagaryManageCtrl', function ($scope, catagaryService) {
        $scope.catagarys = catagaryService.getCatagarys();

        $scope.showEdit = function (catagary) {
            catagaryService.storeCatagary(catagary);
        };

        $scope.removeItem = function (catagary) {
            catagaryService.removeCatagary(catagary);
            $scope.catagarys = catagaryService.getCatagarys();
        };
    });
