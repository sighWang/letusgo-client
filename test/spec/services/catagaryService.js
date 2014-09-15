'use strict';
describe('Service: categoryService', function () {
  var categoryService, store = {}, localStorageService, $scope;

  beforeEach(function () {
    module('letusgoApp');
    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      localStorageService = $injector.get('localStorageService');
      categoryService = $injector.get('categoryService');
    });
    spyOn(localStorageService, 'get').and.callFake(function (key) {
      return store[key];
    });

    spyOn(localStorageService, 'set').and.callFake(function (key, value) {
      store[key] = value;
    });
    initData(localStorageService);
  });

  it('categorys: should be defined', function () {
    expect(categoryService.categorys.length).toEqual(jasmine.any(Number));
  });

  it('editCategory: category should be update', function () {
    spyOn(categoryService, 'editCategorys');
    categoryService.editCategory({id: '4', name: '4'});
    expect(categoryService.editCategorys).toHaveBeenCalled();
  });

  it('editCategorys: categorys should be uodate', function () {
    categoryService.editCategorys([
      {id: '4', name: '4'}
    ]);
    expect(localStorageService.set).toHaveBeenCalledWith('categorys', [
      {id: '4', name: '4'}
    ]);
  });

  it('removeCategory: categorys should be delete one', function () {
    var length = categoryService.categorys.length;
    categoryService.removeCategory({id: '4', name: '4'});
    expect(categoryService.categorys.length).toEqual(length - 1);
  });
  it('addCategory:categorys should be add one', function () {
    var length = categoryService.categorys.length;
    categoryService.addCategory({id: '4', name: '4'});
    expect(categoryService.categorys.length).toEqual(length + 1);
  });
});

