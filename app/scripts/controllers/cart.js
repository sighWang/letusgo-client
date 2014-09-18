'use strict';
angular.module('letusgoApp')
  .controller('CartCtrl', function ($scope, cartService) {

    $scope.$emit('cartHighLight');
    updatePage();
    $scope.categoryNames = Object.keys(cartService.getCategory());

    $scope.addOneToCart = function (item) {
      cartService.addGoodsNumberById(item.goods.id);
      updateCartNumber();
      updatePage();
    };

    $scope.minusOneToCart = function (item) {
      cartService.minusGoodsNumberById(item.goods.id);
      updateCartNumber();
      updatePage();
    };
    function updatePage() {
      $scope.total = cartService.getTotal();
      $scope.categorys = cartService.getCategory();
    }

    function updateCartNumber() {
      $scope.$emit('updateCartNumber');
    }
  });
