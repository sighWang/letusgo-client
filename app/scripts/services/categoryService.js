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

//      this.removeCategory = function (category) {
//        var categorys = this.categorys;
//        var index = _.findIndex(categorys, {'id': category.id});
//        categorys.splice(index, 1);
//        this.editCategorys(categorys);
//      };
      this.removeCategory = function (categories) {
        $http.post('/api/categories/delete?data=' + JSON.stringify(categories)).success(function (data) {
          console.log('enter post\n' + data);
        });
        $http.post('/api/categories/delete', 'name:sigh').error(function () {
          console.log('Request failed');
        });
      };

      this.addCategory = function (category) {
        this.categorys.push(category);
        this.editCategorys(this.categorys);
      };
    });
})(window._);
