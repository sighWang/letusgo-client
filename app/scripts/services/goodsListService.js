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

      this.storeGoodsId = function (id) {
        this.temporaryId = id;
      };

      this.getStoreGoodsId = function () {
        return this.temporaryId;
      };

      this.getGoods = function (id, callback) {
        $http.get('/api/items/' + id).success(function (data) {
          callback(data);
        });
      };

      this.editGoods = function (goods) {
        $http.put('/api/items', {data: goods}).success()
          .error(function () {
            console.log('Request failed');
          });
      };
      this.editGoodsList = function (goodsList) {
        localStorageService.set('goodsList', goodsList);
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
