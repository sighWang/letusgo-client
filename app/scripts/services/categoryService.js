'use strict';
(function (_) {
  angular.module('letusgoApp')
    .service('categoryService', function (localStorageService, $http) {
      this.categorys = localStorageService.get('categorys');
      this.getCategorys = function () {
        return localStorageService.get('categorys');
      };
      this.getCategories = function (callback) {
        $http({method: 'GET', url: '/api/categories/manage'}).success(function (categories) {
          callback(categories);
        });
        $http({method: 'GET', url: '/api/categories/manage'}).error(function () {
          console.log('Request failed');
        });
        console.log('with http')
      };
      this.storeCategory = function (category) {
        this.temporaryCategory = category;
      };

      this.getStoreCategory = function () {
        return this.temporaryCategory;
      };

      this.editCategory = function (category) {
        var categorys = this.categorys;
        var index = _.findIndex(categorys, {'id': category.id});
        this.categorys[index] = category;
        this.editCategorys(categorys);
      };

      this.editCategorys = function (categorys) {
        localStorageService.set('categorys', categorys);
      };

      this.removeCategory = function (category) {
        $http.delete('api/categories?id='+category.id).
          success(function (data){
            console.log(data);
          }).
          error(function () {
            console.log('Request failed');
          });
      };

      this.addCategory = function (category) {
        this.categorys.push(category);
        this.editCategorys(this.categorys);
      };
      function editCategories(categories){
        $http.post('api/categories', {categories: categories}).
          success(function (data){
            console.log(data);
          }).
          error(function () {
            console.log('Request failed');
          });
      }
    });
})(window._);
