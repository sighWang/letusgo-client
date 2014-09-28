'use strict';
angular.module('letusgoApp')
  .controller('AddGoodsCtrl', function ($scope, GoodsListService, CategoryService, $location) {
    $scope.add = function (goods) {
      if (goods) {
        $('#myModal').modal({});
      }
      else if (goods.id || goods.name || goods.unit || goods.price || goods.category) {
        $('#myModal').modal({});
      }
      else {
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
