'use strict';
(function (_) {
  angular.module('letusgoApp')
    .service('cartService', function CartService(localStorageService) {
      this.customGoodsList = localStorageService.get('customGoodsList');
      this.goodsList = localStorageService.get('goodsList');

      this.getCustomGoodsList = function () {
        return this.customGoodsList;
      };

      this.getGoodslist = function () {
        return this.goodsList;
      };

      this.editCustomGoodsList = function (customGoodsList) {
        localStorageService.set('customGoodsList', customGoodsList);
      };

      this.addGoodsNumberById = function (id) {
        var index = -1;
        var customGoodsList = this.customGoodsList;

        for (var i = 0; i < customGoodsList.length; i++) {
          if (_.contains(customGoodsList[i].goods, id)) {
            index = i;
          }
        }

        if (index !== -1) {
          customGoodsList[index].number++;
        }
        else {
          var _goodsList = this.goodsList;
          var item = _.find(_goodsList, {'id': id});
          var customGoods = {goods:item, number:1};
          customGoodsList.push(customGoods);
          this.editCustomGoodsList(customGoodsList);
          return;
        }
        this.editCustomGoodsList(customGoodsList);
      };

      this.minusGoodsNumberById = function (id) {
        var index = -1;
        var customGoodsList = this.customGoodsList;
        for (var i = 0; i < customGoodsList.length; i++) {
          if (_.contains(customGoodsList[i].goods, id)) {
            index = i;
          }
        }
        if (index !== -1 && customGoodsList[index].number > 0) {
          customGoodsList[index].number--;
          if (customGoodsList[index].number === 0) {
            customGoodsList.splice(index);
          }
        }
        else {
          return -1;
        }
        this.editCustomGoodsList(customGoodsList);
      };

      this.getTotal = function () {
        var _customGoodsList = this.customGoodsList;
        var total = 0;
        _.forEach(_customGoodsList, function (customGoods) {
          total += customGoods.number * customGoods.goods.price;
        });
        return total;
      };

      this.getCartNumber = function () {
        var customGoodsList = this.customGoodsList;
        var cartNumber = 0;
        if (customGoodsList) {
          for (var i = 0; i < customGoodsList.length; i++) {
            cartNumber += customGoodsList[i].number;
          }
        }
        return cartNumber;
      };

      this.getCategory = function () {
        var customGoodsList = this.customGoodsList;
        var categorys = _.groupBy(customGoodsList, function (customGoods) {
          return customGoods.goods.category;
        });
        return categorys;
      };
    });
})(window._);
