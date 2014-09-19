'use strict';
angular.module('letusgoApp')
    .controller('ListCtrl', function ($scope, cartService) {
        $scope.$emit('listHighLight');
        $scope.goodsList = cartService.getGoodslist(function (data){
          $scope.goodsList = data;
        });

        $scope.addOneToCart = function (goods) {
            cartService.addGoodsNumberById(goods.id);
            $scope.$emit('updateCartNumber');
        };
    });
