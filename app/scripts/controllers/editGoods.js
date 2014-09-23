'use strict';
angular.module('letusgoApp')
  .controller('EditGoodsCtrl', function ($scope, GoodsListService, CategoryService) {
    var id= GoodsListService.getStoreGoodsId();
    GoodsListService.getGoods(id, function (data){
        $scope.goods = data;
    });

    $scope.edit = function (goods) {
      GoodsListService.editGoods(goods);
    };
  CategoryService.getCategories(function (data) {
         $scope.categories = data;
      });
  });
