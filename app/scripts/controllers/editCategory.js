'use strict';

angular.module('letusgoApp')
  .controller('EditCategoryCtrl', function ($scope, CategoryService, $location) {
    $scope.category = CategoryService.getStoreCategory();

    $scope.edit = function (category) {
      if (category.name) {
        $scope.tip = '';
        CategoryService.editCategory(category);
        $location.path('/api/categories');
      }
      else {
        $scope.tip = '请填写完整信息';
      }
    };
  });
