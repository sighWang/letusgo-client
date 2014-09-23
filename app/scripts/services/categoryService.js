'use strict';
(function (_) {
  angular.module('letusgoApp')
    .service('categoryService', function ($http) {

      this.getCategories = function (callback) {
        $http({method: 'GET', url: '/api/categories'}).success(function (categories) {
          callback(categories);
        })
          .error(function () {
            console.log('Request failed');
          });
      };

      this.editCategory = function (category) {
        $http.put('/api/categories', {data: category}).success()
          .error(function () {
            console.log('Request failed');
          });
      };

      this.removeCategory = function (id) {
        $http.delete('api/categories/' + id).success()
          .error(function () {
            console.log('Request failed');
          });
      };

      this.addCategory = function (category) {
        $http.post('api/categories', {data: category}).success()
          .error(function () {
            console.log('Request failed')
          });
      };

      this.storeCategory = function (category) {
        this.temporaryCategory = category;
      };

      this.getStoreCategory = function () {
        return this.temporaryCategory;
      };
    });
})(window._);
