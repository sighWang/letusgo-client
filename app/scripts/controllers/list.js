'use strict';
angular.module('letusgoApp')
  .controller('ListCtrl', function ($scope, GoodsListService, CartService) {
    $scope.$emit('listHighLight');
    GoodsListService.getGoodslist(function (data) {
      $scope.goodsList = data;
    });

    $scope.addOneToCart = function (goods) {
      CartService.updateGoodsNumberById(goods.id, 1);
      $scope.$emit('updateCartNumber');
    };
  });
