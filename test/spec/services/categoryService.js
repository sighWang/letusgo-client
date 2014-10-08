'use strict';
describe('Service: categoryService', function () {
  var categoryService, $scope, $httpBackend, categorieyList, $http;

  beforeEach(function () {
    module('letusgoApp');
    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      $httpBackend = $injector.get('$httpBackend');
      categoryService = $injector.get('CategoryService');
      $http = $injector.get('$http');
    });

    categorieyList = [ {id:'1', name: '饮料'}, {id:'2', name: '水果'}, {id:'3', name: '运动器材'}];
  });

  it('categorys: should get categorie', function () {
    $httpBackend.expectGET('/api/customItems/').respond(categorieyList);
    categoryService.getCategories(function (categories) {
      expect(categories).toEqual(categorieyList);
    });
  });

  it('editCategory: category should be update', function () {
    spyOn($http, 'put');
    categoryService.editCategory({id: '4', name: '4'});
    expect($http.put).toHaveBeenCalled();
  });

  it('removeCategory: categorys should be delete one', function () {
    spyOn(categoryService, 'removeCategory').and.callFake(function (callback) {
      callback(true);
    });
    categoryService.removeCategory(function () {

    });
    expect(categoryService.removeCategory).toHaveBeenCalled();
  });

  it('addCategory:categorys should be add one', function () {
    spyOn($http, 'post');
    categoryService.addCategory({id: '4', name: '4'});
    expect($http.post).toHaveBeenCalled();
  });

  it('should category.temporaryCategory  define', function () {
    categoryService.storeCategory({id: '4', name: '4'});
    expect(categoryService.temporaryCategory).toEqual({id: '4', name: '4'});
  });

  it('should get correct temporaryCategory', function () {
    categoryService.storeCategory({id: '4', name: '4'});
    expect(categoryService.getStoreCategory()).toEqual({id: '4', name: '4'});
  })
});
