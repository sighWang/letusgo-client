'use strict';
angular.module('yeomanLetusgoApp')
  .controller('EditGoodsCtrl', function ($scope, goodsListService, catagaryService) {

    $scope.goods = goodsListService.getStoreGoods();

    $scope.edit = function (goods) {
      goodsListService.editGoods(goods);
    };

    $scope.catagarys = catagaryService.getCatagarys();
  });
