'use strict';
(function (_) {
  angular.module('letusgoApp')
    .service('goodsListService', function GoodsListService($http) {
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

      this.addGoods = function (goods) {
        $http.post('/api/items', {data: goods}).success()
          .error(function () {
            console.log('Request failed');
          });
      };

      this.removeGoods = function (goods) {
        $http.delete('api/items/' + goods.id).success()
          .error(function () {
            console.log('Request failed');
          });
      };
    });
})(window._);
