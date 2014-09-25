'use strict';
(function (_) {
  angular.module('letusgoApp')
    .service('GoodsListService', function GoodsListService($http) {
      this.getGoodslist = function (callback) {
        $http({method: 'GET', url: '/api/items'}).success(function (data) {
          callback(data);
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

      this.editGoods = function (item) {
        $http.put('/api/items/' + JSON.stringify(item)).success();
      };

      this.addGoods = function (goods) {
        $http.post('/api/items', {data: goods}).success();
      };

      this.removeGoods = function (goods) {
        $http.delete('api/items/' + goods.id).success();
      };
    });
})(window._);
