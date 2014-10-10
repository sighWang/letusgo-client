'use strict';
angular.module('letusgoApp')
  .controller('AddGoodsCtrl', function ($scope, GoodsListService, CategoryService, $location) {
    $scope.add = function (goods) {
      if (!goods) {
        $scope.tip = '请完整填写信息';
      }
      else if (!goods.id || !goods.name || !goods.unit || !goods.price || !goods.category) {
        $scope.tip = '请完整填写信息';
      }
      else {
        $scope.tip = '';
        GoodsListService.addGoods(goods);
        $scope.$emit('refreshGoodsList');
        $scope.$broadcast('refreshGoodsList');
        $location.path('/api/items/manage');
      }
    };

    CategoryService.getCategories(function (data) {
      $scope.categories = data;
    });
  });
