'use strict';

angular.module('letusgoApp')
    .controller('EditCategoryCtrl', function ($scope, categoryService) {
        $scope.category = categoryService.getStoreCategory();

        $scope.edit = function (category) {
            categoryService.editCategory(category);
        };
    });
