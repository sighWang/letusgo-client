'use strict';
describe('Service: categoryService', function () {
  var categoryService, $scope, $httpBackend;

  beforeEach(function () {
    module('letusgoApp');
    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      $httpBackend = $injector.get('$httpBackend');
      categoryService = $injector.get('CategoryService');
    });
  });

  it('categorys: should get categories', function () {
    var id = 'IED00000';
    $httpBackend.expectPOST('/api/customItems/' + id).respond('success');
    categoryService.getCategories(function (categories) {
      expect(categories).toEqual('success');
    });
  });
//
//  it('editCategory: category should be update', function () {
//    spyOn(categoryService, 'editCategorys');
//    categoryService.editCategory({id: '4', name: '4'});
//    expect(categoryService.editCategorys).toHaveBeenCalled();
//  });
//
//  it('editCategorys: categorys should be uodate', function () {
//    categoryService.editCategorys([
//      {id: '4', name: '4'}
//    ]);
//    expect(localStorageService.set).toHaveBeenCalledWith('categorys', [
//      {id: '4', name: '4'}
//    ]);
//  });
//
//  it('removeCategory: categorys should be delete one', function () {
//    var length = categoryService.categorys.length;
//    categoryService.removeCategory({id: '4', name: '4'});
//    expect(categoryService.categorys.length).toEqual(length - 1);
//  });
//  it('addCategory:categorys should be add one', function () {
//    var length = categoryService.categorys.length;
//    categoryService.addCategory({id: '4', name: '4'});
//    expect(categoryService.categorys.length).toEqual(length + 1);
//  });
});
