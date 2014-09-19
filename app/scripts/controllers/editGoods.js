'use strict';
angular.module('letusgoApp')
  .controller('EditGoodsCtrl', function ($scope, goodsListService, categoryService) {

    $scope.goods = goodsListService.getStoreGoods();

    $scope.edit = function (goods) {
      goodsListService.editGoods(goods);
    };
  $scope.categorys = categoryService.getCategorys();
  $scope.categories = catagoryService.getCategories(function (data){
      $scope.categories = data;
  });
  });
