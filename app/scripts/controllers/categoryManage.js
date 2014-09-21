'use strict';

angular.module('letusgoApp')
  .controller('CategoryManageCtrl', function ($scope, categoryService) {
    updateCategories();

    $scope.showEdit = function (category) {
      categoryService.storeCategory(category);
    };

    $scope.removeItem = function (id) {
      categoryService.removeCategory(id);
      updateCategories();
    };
    function updateCategories() {
      categoryService.getCategories(function (data) {
        $scope.categories = data;
      });
    }
  });
