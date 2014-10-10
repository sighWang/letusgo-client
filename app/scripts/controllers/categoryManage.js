'use strict';

angular.module('letusgoApp')
  .controller('CategoryManageCtrl', function ($scope, CategoryService) {
    updateCategories();

    $scope.showEdit = function (category) {
      CategoryService.storeCategory(category);
    };

    $scope.removeItem = function (category) {
      CategoryService.ableRemove(category, function (removed) {
        if (removed) {
          $scope.tip = '';
          CategoryService.removeCategory(category);
        }
        else {
          $scope.tip = '该分类下存在商品，无法删除';
        }
      });
    };

    function updateCategories() {
      CategoryService.getCategories(function (data) {
        $scope.categories = data;
      });
    }
  });
