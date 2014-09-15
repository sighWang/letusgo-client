'use strict';
(function (_) {
  angular.module('letusgoApp')
    .service('goodsListService', function GoodsListService(localStorageService) {
      this.goodsList = localStorageService.get('goodsList');
      this.getGoodslist = function () {
        return localStorageService.get('goodsList');
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
        var goodsList = localStorageService.get('goodsList');
        var index = _.findIndex(goodsList, {'id': goods.id});
        goodsList.splice(index, 1);
        this.editGoodsList(goodsList);
      };
    });
})(window._);
