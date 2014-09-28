'use strict';
describe('Service: goodsListService', function () {
  var goodsListService, $scope, $httpBackend;

  beforeEach(function () {
    module('letusgoApp');
    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      goodsListService = $injector.get('GoodsListService');
      $httpBackend = $injector.get('$httpBackend');
    });
  });

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('goodsList: should be get goodsList', function () {
    $httpBackend.expectGET('/api/items').respond([0, 1]);
    goodsListService.getGoodslist(function (data) {
      expect(data.length).toBe(2);
    });
    $httpBackend.flush();
  });

  it('getGoods: should return a goods', function () {
    $httpBackend.expectGET('/api/items/item').respond([0, 1]);
    goodsListService.getGoods('item', function (data) {
      expect(data).toEqual([0, 1]);
    });
    $httpBackend.flush();
  });
});
