'use strict';

angular.module('letusgoApp')
  .controller('EditCategoryCtrl', function ($scope, CategoryService) {
    $scope.category = CategoryService.getStoreCategory();

    $scope.edit = function (category) {
      CategoryService.editCategory(category);
    };
  });
