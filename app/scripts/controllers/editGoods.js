'use strict';
angular.module('letusgoApp')
  .controller('EditGoodsCtrl', function ($scope, goodsListService, categoryService) {
    var id= goodsListService.getStoreGoodsId();
    goodsListService.getGoods(id, function (data){
        $scope.goods = data;
    });

    $scope.edit = function (goods) {
      goodsListService.editGoods(goods);
    };
  categoryService.getCategories(function (data) {
         $scope.categories = data;
      });
  });
