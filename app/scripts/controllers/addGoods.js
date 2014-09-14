'use strict';
angular.module('yeomanLetusgoApp')
    .controller('AddGoodsCtrl', function ($scope, goodsListService, catagaryService) {
        $scope.add = function (goods) {
            goodsListService.addGoods(goods);
            $scope.$emit('refreshGoodsList');
            $scope.$broadcast('refreshGoodsList');
        };
        $scope.catagarys = catagaryService.getCatagarys();
    });
