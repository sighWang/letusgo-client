'use strict';
(function (_) {
  angular.module('letusgoApp')
    .service('CategoryService', function ($http, GoodsListService) {
      function isContain(data, category){
        var result = false;
        _.forEach(data, function (item) {
          var contain = _.contains(item, category.name);
          if (contain) {
            result = contain;
          }
        });
        return result;
      }
      this.ableRemove = function (category, callback) {
        GoodsListService.getGoodslist(function (data) {
          callback(isContain(data, category));
        });
      };

      this.getCategories = function (callback) {
        $http({method: 'GET', url: '/api/categories'}).success(function (categories) {
          callback(categories);
        });
      };

      this.editCategory = function (category) {
        $http.put('/api/categories/' + JSON.stringify(category));
      };

      this.removeCategory = function (category) {
        $http.delete('api/categories/' + category.id);
      };

      this.addCategory = function (category) {
        $http.post('api/categories', {data: category});
      };

      this.storeCategory = function (category) {
        this.temporaryCategory = category;
      };

      this.getStoreCategory = function () {
        return this.temporaryCategory;
      };
    });
})(window._);
