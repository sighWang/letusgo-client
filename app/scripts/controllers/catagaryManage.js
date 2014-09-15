'use strict';

angular.module('letusgoApp')
    .controller('CategoryManageCtrl', function ($scope, categoryService) {
        $scope.categorys = categoryService.getCategorys();

        $scope.showEdit = function (category) {
            categoryService.storeCategory(category);
        };

        $scope.removeItem = function (category) {
            categoryService.removeCategory(category);
            $scope.categorys = categoryService.getCategorys();
        };
    });
