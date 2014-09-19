'use strict';

angular.module('letusgoApp')
  .controller('CategoryManageCtrl', function ($scope, categoryService) {
    updateCategories();

    $scope.showEdit = function (category) {
      categoryService.storeCategory(category);
    };

    $scope.removeItem = function (category) {
      categoryService.removeCategory(category);
      updateCategories();
    };
    function updateCategories() {
      $scope.categories = categoryService.getCategories(function (data){
        $scope.categories = data;
      });
    }
  });
