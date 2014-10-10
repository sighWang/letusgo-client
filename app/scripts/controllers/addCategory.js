'use strict';
angular.module('letusgoApp')
  .controller('AddCategoryCtrl', function ($scope, CategoryService, $location) {
    $scope.add = function (category) {
      if (!category) {
        $scope.tip = '请完整填写信息';
      }
      else if (!category.id || !category.name) {
        $scope.tip = '请完整填写信息';
      }
      else {
        $scope.tip = '';
        CategoryService.addCategory(category);
        $location.path('/api/categories');
      }
    };
  });
