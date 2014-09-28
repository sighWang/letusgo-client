'use strict';

angular.module('letusgoApp')
  .controller('EditCategoryCtrl', function ($scope, CategoryService, $location) {
    $scope.category = CategoryService.getStoreCategory();

    $scope.edit = function (category) {
      if (category.name) {
        CategoryService.editCategory(category);
        $location.path('/api/categories');
      }
      else {
        $('#myModal').modal({});
      }
    };
  });
