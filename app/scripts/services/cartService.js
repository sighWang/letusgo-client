'use strict';
(function (_) {
  angular.module('letusgoApp')
    .service('cartService', function CartService(localStorageService, $http) {
      this.customGoodsList = localStorageService.get('customGoodsList');
      this.goodsList = localStorageService.get('goodsList');
//      this.getCustomGoodsList = function () {
//        return localStorageService.get('customGoodsList');
//      };
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

//      this.editCustomGoodsList = function (customGoodsList) {
//        $http({method:'POST',url:'/api/items/customItem/edit',
//          params: {'customItems': JSON.stringify(customGoodsList)}}).
//          success().
//          error(function (){
//            console.log('Request failed');
//          });
//      };
      function editCustomGoodsList(customGoodsList) {
        $http({method:'POST',url:'/api/items/customItems/edit',
          params: {'customItems': JSON.stringify(customGoodsList)}}).
          success().
          error(function (){
            console.log('Request failed');
          });
      }
//      this.addGoodsNumberById = function (id) {
//        var customGoodsList = localStorageService.get('customGoodsList');
//        var index = this.getGoodsIndex(id);
//        index !== -1 ? this.addNumber(customGoodsList, index) : this.newNumber(customGoodsList, id);
//      };
      this.addGoodsNumberById = function (id) {
          this.getCustomGoodsList(function (data){
            var customGoodsList = data;
            var index = getGoodsIndex(customGoodsList,id);
           index !== -1 ? addNumber(customGoodsList, index) : newNumber(customGoodsList, id);
          });
      };
      function addNumber(customGoodsList, index) {
        customGoodsList[index].number++;
        editCustomGoodsList(customGoodsList);
      }
      function newNumber(customGoodsList, id) {
        getGoodslist(function (data){
          var goodsList = data;
          var item = _.find(goodsList, {'id': id});
          var customGoods = {goods: item, number: 1};
          customGoodsList.push(customGoods);
          editCustomGoodsList(customGoodsList);
        });
      }

      function getGoodsIndex(customGoodsList,id){
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

      this.getTotal = function () {
        var _customGoodsList = localStorageService.get('customGoodsList');
        var total = 0;
        _.forEach(_customGoodsList, function (customGoods) {
          total += customGoods.number * customGoods.goods.price;
        });
        return total;
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
        this.getCustomGoodsList(function (data){
          var categories = _.groupBy(data, function (customGoods) {
            return customGoods.goods.category;
          });
          callback(categories);
        });

      };
    });
})(window._);
