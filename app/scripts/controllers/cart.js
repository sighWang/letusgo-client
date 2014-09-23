'use strict';
angular.module('letusgoApp')
  .controller('CartCtrl', function ($scope, cartService, categoryService) {

    $scope.$emit('cartHighLight');
    updatePage();

    $scope.addOneToCart = function (id) {
      cartService.updateGoodsNumberById(id, 1);
      updateCartNumber();
      updatePage();
    };

    $scope.minusOneToCart = function (id) {
      console.log(id);
      cartService.updateGoodsNumberById(id, -1);
      updateCartNumber();
      updatePage();
    };

    function updatePage() {
      cartService.getCategory(function (data, total) {
        $scope.categories = data;
        $scope.total = total;
      });
    }

    function updateCartNumber() {
      $scope.$emit('updateCartNumber');
    }
  });
