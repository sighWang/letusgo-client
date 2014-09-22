'use strict';
(function (_) {
  angular.module('letusgoApp')
    .service('cartService', function CartService(localStorageService, $http) {
      this.customGoodsList = localStorageService.get('customGoodsList');
      this.goodsList = localStorageService.get('goodsList');
      this.getCustomGoodsList = function (callback) {
        $http({method: 'GET', url: '/api/items/customItems'}).success(function (data) {
          callback(data);
        });
      };
      this.getGoodslist = function (callback) {
        $http({method: 'GET', url: '/api/items'}).success(function (data) {
          callback(data);
        });
        $http({method: 'GET', url: '/api/items'}).error(function () {
          console.log('Request failed');
        });
      };
      function getGoodslist(callback) {
        $http({method: 'GET', url: '/api/items'}).success(function (data) {
          callback(data);
        });
        $http({method: 'GET', url: '/api/items'}).error(function () {
          console.log('Request failed');
        });
      }
      this.updateGoodsNumberById = function (id, data) {
        $http.post('/api/customItems/'+id,{data:data}).success()
          .error(function () {
            console.log('Request failed');
          });
      };
      function getGoodsIndex(customGoodsList, id) {
        var index = -1;
        for (var i = 0; i < customGoodsList.length; i++) {
          if (_.contains(customGoodsList[i].goods, id)) {
            index = i;
          }
        }
        return index;
      }

      this.minusGoodsNumberById = function (id) {
        var customGoodsList = localStorageService.get('customGoodsList');
        var index = this.getGoodsIndex(id);
        if (index !== -1 && customGoodsList[index].number > 0) {
          customGoodsList[index].number--;
        }

        if (customGoodsList[index].number === 0) {
          customGoodsList.splice(index);
        }
        this.editCustomGoodsList(customGoodsList);
      };

      this.getTotal = function (callback) {
        this.getCustomGoodsList(function (customGoodsList) {
          var total = 0;
          _.forEach(customGoodsList, function (customGoods) {
            total += customGoods.number * customGoods.goods.price;
            callback(total);
          });
        });
      };

      this.getCartNumber = function () {
        var customGoodsList = localStorageService.get('customGoodsList');
        var cartNumber = 0;
        if (customGoodsList) {
          for (var i = 0; i < customGoodsList.length; i++) {
            cartNumber += customGoodsList[i].number;
          }
        }
        return cartNumber;
      };

      this.getCategory = function (callback) {
        this.getCustomGoodsList(function (data) {
          var categories = _.groupBy(data, function (customGoods) {
            return customGoods.goods.category;
          });
          callback(categories);
        });

      };
    });
})(window._);
