'use strict';
angular.module('letusgoApp')
    .controller('ListmanageCtrl', function ($scope, goodsListService) {
        $scope.goodsList = goodsListService.getGoodslist();

        $scope.showEdit = function (goods) {
            goodsListService.storeGoods(goods);
        };

        $scope.removeItem = function (goods) {
            goodsListService.removeGoods(goods);
            $scope.goodsList = goodsListService.getGoodslist();
        };
    });
