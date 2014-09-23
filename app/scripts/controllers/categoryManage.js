'use strict';

angular.module('letusgoApp')
  .controller('CategoryManageCtrl', function ($scope, CategoryService) {
    updateCategories();

    $scope.showEdit = function (category) {
      CategoryService.storeCategory(category);
    };

    $scope.removeItem = function (id) {
      CategoryService.removeCategory(id);
      updateCategories();
    };

    function updateCategories() {
      CategoryService.getCategories(function (data) {
        $scope.categories = data;
      });
    }
  });
