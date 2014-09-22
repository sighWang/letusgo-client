'use strict';
(function (_) {
  angular.module('letusgoApp')
    .service('goodsListService', function GoodsListService(localStorageService, $http) {
      this.getGoodslist = function (callback) {
        $http({method: 'GET', url: '/api/items'}).success(function (data) {
          callback(data);
        })
        .error(function () {
          console.log('Request failed');
        });
      };

      this.storeGoods = function (goods) {
        this.temporaryGoods = goods;
      };

      this.getStoreGoods = function () {
        return this.temporaryGoods;
      };

      this.editGoodsList = function (goodsList) {
        localStorageService.set('goodsList', goodsList);
      };

      this.editGoods = function (goods) {
        var goodsList = localStorageService.get('goodsList');
        var index = _.findIndex(goodsList, {'id': goods.id});
        this.goodsList[index] = goods;
        this.editGoodsList(goodsList);
      };

      this.addGoods = function (goods) {
        var goodsList = localStorageService.get('goodsList');
        goodsList.push(goods);
        this.editGoodsList(goodsList);
      };
      this.removeGoods = function (goods) {
        $http.delete('api/items/' + goods.id).success()
          .error(function () {
            console.log('Request failed');
          });
      };
      function findItemIndex(goods) {
        var goodsList = localStorageService.get('goodsList');
        var index = _.findIndex(goodsList, {'id': goods.id});
        return index;
      }
    });
})(window._);
