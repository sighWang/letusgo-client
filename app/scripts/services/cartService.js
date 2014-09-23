'use strict';
(function (_) {
  angular.module('letusgoApp')
    .service('cartService', function CartService(localStorageService, $http) {
      this.getGoodslist = function (callback) {
        $http({method: 'GET', url: '/api/items'}).success(function (data) {
          callback(data);
        });
        $http({method: 'GET', url: '/api/items'}).error(function () {
          console.log('Request failed');
        });
      };
      this.updateGoodsNumberById = function (id, data) {
        $http.post('/api/customItems/' + id, {data: data}).success(function(data) {
        })
          .error(function () {
            console.log('Request failed');
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
        $http.get('/api/customItems').success(function (data) {
          callback(data.categories, data.total);
        });
      };
    });
})(window._);
