'use strict';
angular.module('letusgoApp')
  .controller('EditGoodsCtrl', function ($scope, GoodsListService, CategoryService, $location) {
    var id= GoodsListService.getStoreGoodsId();
    GoodsListService.getGoods(id, function (data){
        $scope.goods = data;
    });

    $scope.edit = function (goods) {
    if(!goods.id || !goods.name || !goods.unit || !goods.price || !goods.category){
            $('#myModal').modal({});
          }
          else{
            GoodsListService.editGoods(goods);
            $scope.$emit('refreshGoodsList');
            $location.path('/api/items/manage');
          }
    };

  CategoryService.getCategories(function (data) {
         $scope.categories = data;
      });
  });
