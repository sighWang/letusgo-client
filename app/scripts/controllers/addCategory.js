'use strict';
angular.module('letusgoApp')
    .controller('AddCategoryCtrl', function ($scope, categoryService) {
        $scope.add = function (category) {
            categoryService.addCategory(category);
        };
    });
