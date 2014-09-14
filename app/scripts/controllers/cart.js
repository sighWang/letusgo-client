'use strict';
angular.module('yeomanLetusgoApp')
    .controller('CartCtrl', function ($scope, cartService) {

        $scope.$emit('cartHighLight');

        $scope.catagarys = cartService.getCatagary();
        $scope.total = cartService.getTotal();
        $scope.catagaryNames = Object.keys(cartService.getCatagary());

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
            $scope.catagarys = cartService.getCatagary();
        };
    });
