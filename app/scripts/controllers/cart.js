'use strict';
angular.module('letusgoApp')
    .controller('CartCtrl', function ($scope, cartService) {

        $scope.$emit('cartHighLight');

        $scope.categorys = cartService.getCategory();
        $scope.total = cartService.getTotal();
        $scope.categoryNames = Object.keys(cartService.getCategory());

        $scope.addOneToCart = function (item) {
            cartService.addGoodsNumberById(item.goods.id);
            $scope.$emit('updateCartNumber');
            $scope.updatePage();
        };

        $scope.minusOneToCart = function (item) {
            cartService.minusGoodsNumberById(item.goods.id);
            $scope.$emit('updateCartNumber');
            $scope.updatePage();
        };

        $scope.updatePage = function () {
            $scope.total = cartService.getTotal();
            $scope.categorys = cartService.getCategory();
        };
    });
