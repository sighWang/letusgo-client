'use strict';
angular.module('letusgoApp')
  .controller('CartCtrl', function ($scope, cartService, categoryService) {

    $scope.$emit('cartHighLight');
    updatePage();
    $scope.categoryNames = categoryService.getCategories(function (data){
      $scope.categoryNames = data;
    });

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
      $scope.total = cartService.getTotal(function (data){
        $scope.total = data;
      });
      $scope.categories = cartService.getCategory(function (data){
        $scope.categories = data;
      });
    }

    function updateCartNumber() {
      $scope.$emit('updateCartNumber');
    }
  });
