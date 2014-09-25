'use strict';
(function (_) {
  angular.module('letusgoApp')
    .service('CategoryService', function ($http) {

      this.getCategories = function (callback) {
        $http({method: 'GET', url: '/api/categories'}).success(function (categories) {
          callback(categories);
        });
      };

      this.editCategory = function (category) {
        $http.put('/api/categories/' + JSON.stringify(category)).success();
      };

      this.removeCategory = function (id) {
        $http.delete('api/categories/' + id).success();
      };

      this.addCategory = function (category) {
        $http.post('api/categories', {data: category}).success();
      };

      this.storeCategory = function (category) {
        this.temporaryCategory = category;
      };

      this.getStoreCategory = function () {
        return this.temporaryCategory;
      };
    });
})(window._);
