'use strict';
describe('Service: goodsListService', function () {
  var goodsListService, $scope, $httpBackend;

  beforeEach(function () {
    module('letusgoApp');
    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      goodsListService = $injector.get('goodsListService');
    });
  });

  it('goodsList: should be defined', function () {
    expect(goodsListService.goodsList.length).toEqual(jasmine.any(Number));
    expect(goodsListService.goodsList.length).toEqual(4);
  });

  it('getGoodsList: localStorageService.get should be called', function () {

  });

  it('editGoodsList: localStorageService.set should be called', function () {

  });

  it('editGoods: goodsListService.editGoodsList hava been called', function () {

  });

  it('addGoods: goodsList length should be add one', function () {

  });

  it('remove: goodsList length should be minus one', function () {

  });
});
