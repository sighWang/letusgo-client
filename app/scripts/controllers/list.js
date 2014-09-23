'use strict';
angular.module('letusgoApp')
  .controller('ListCtrl', function ($scope, CartService) {
    $scope.$emit('listHighLight');
    $scope.goodsList = CartService.getGoodslist(function (data) {
      $scope.goodsList = data;
    });

    $scope.addOneToCart = function (goods) {
      CartService.updateGoodsNumberById(goods.id, 1);
      $scope.$emit('updateCartNumber');
    };
  });
