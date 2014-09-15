'use strict';
angular.module('letusgoApp')
    .controller('AddGoodsCtrl', function ($scope, goodsListService, categoryService) {
        $scope.add = function (goods) {
            goodsListService.addGoods(goods);
            $scope.$emit('refreshGoodsList');
            $scope.$broadcast('refreshGoodsList');
        };
        $scope.categorys = categoryService.getCategorys();
    });
