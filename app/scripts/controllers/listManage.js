'use strict';
angular.module('letusgoApp')
  .controller('ListmanageCtrl', function ($scope, goodsListService) {

    updateItems();
    $scope.showEdit = function (goods) {
      goodsListService.storeGoods(goods);
    };

    $scope.removeItem = function (goods) {
      goodsListService.removeGoods(goods);
      updateItems();
    };
    function updateItems(){
      goodsListService.getGoodslist(function (date) {
        $scope.goodsList = date;
      });
    }
  });
