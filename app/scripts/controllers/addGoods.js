'use strict';
angular.module('letusgoApp')
  .controller('AddGoodsCtrl', function ($scope, GoodsListService, CategoryService) {
    $scope.add = function (goods) {
      GoodsListService.addGoods(goods);
      $scope.$emit('refreshGoodsList');
      $scope.$broadcast('refreshGoodsList');
    };
    CategoryService.getCategories(function (data) {
      $scope.categories = data;
    });
  });
