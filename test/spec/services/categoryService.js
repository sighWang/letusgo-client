'use strict';
describe('Service: categoryService', function () {
  var categoryService, $scope, $httpBackend, categoryList, $http, goodsList, goodsListService;

  beforeEach(function () {
    module('letusgoApp');
    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      $httpBackend = $injector.get('$httpBackend');
      categoryService = $injector.get('CategoryService');
      goodsListService = $injector.get('GoodsListService');
      $http = $injector.get('$http');
    });
    goodsList = [
      {id: '5', name: '5', unit: '5', price: '5', category: '5' },
      {id: '6', name: '6', unit: '6', price: '6', category: '6' }
    ];
    categoryList = [
      {id: '1', name: '饮料'},
      {id: '2', name: '水果'},
      {id: '3', name: '运动器材'}
    ];
  });

  it('categorys: should get categorie', function () {
    $httpBackend.expectGET('/api/customItems/').respond(categoryList);
    categoryService.getCategories(function (categories) {
      expect(categories).toEqual(categoryList);
    });
  });

  it('editCategory: category should be update', function () {
    spyOn($http, 'put');
    categoryService.editCategory({id: '4', name: '4'});
    expect($http.put).toHaveBeenCalled();
  });

  it('removeCategory: categorys should be delete one', function () {
    var category = {id: '1', name: '饮料'};
    spyOn($http, 'delete');
    categoryService.removeCategory(category);
    expect($http.delete).toHaveBeenCalledWith('api/categories/' + category.id);
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
  });

  it('ableRemove: should be able', function () {
    var category = {id: '4', name: '6'};
    spyOn(goodsListService, 'getGoodslist').and.callFake(function (callback) {
      var result = goodsListService.isContain(goodsList, category.name);
      callback(result);
    });
    categoryService.ableRemove(category, function (data) {
      expect(data).toEqual(false);
    });

  });
});
