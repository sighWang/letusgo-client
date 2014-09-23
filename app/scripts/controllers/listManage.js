'use strict';
angular.module('letusgoApp')
  .controller('ListmanageCtrl', function ($scope, GoodsListService) {

    updateItems();
    $scope.showEdit = function (goods) {
      GoodsListService.storeGoodsId(goods.id);
    };

    $scope.removeItem = function (goods) {
      GoodsListService.removeGoods(goods);
      updateItems();
    };

    function updateItems() {
      GoodsListService.getGoodslist(function (date) {
        $scope.goodsList = date;
      });
    }
  });
