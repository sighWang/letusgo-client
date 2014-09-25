'use strict';
angular.module('letusgoApp')
  .controller('AddGoodsCtrl', function ($scope, GoodsListService, CategoryService, $location) {
    $scope.add = function (goods) {
      if(goods === undefined){
        $('#myModal').modal({});
      }
      else if(goods.id === undefined ||
        goods.name === undefined ||
        goods.unit === undefined ||
        goods.price === undefined ||
        goods.category === undefined){
        $('#myModal').modal({});
      }
      else{
        GoodsListService.addGoods(goods);
        $scope.$emit('refreshGoodsList');
        $scope.$broadcast('refreshGoodsList');
        $location.path('/api/items/manage');
      }

    };

    CategoryService.getCategories(function (data) {
      $scope.categories = data;
    });
  });
