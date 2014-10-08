'use strict';
describe('Service: goodsListService', function () {
  var goodsListService, $scope, $httpBackend, goodsList;

  beforeEach(function () {
    module('letusgoApp');
    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      goodsListService = $injector.get('GoodsListService');
      $httpBackend = $injector.get('$httpBackend');
    });
    goodsList = [
      {id: '5', name: '5', unit: '5', price: '5', category: '5' },
      {id: '6', name: '6', unit: '6', price: '6', category: '6' }
    ];
  });

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('goodsList: should be get goodsList', function () {
    $httpBackend.expectGET('/api/items').respond(goodsList);
    goodsListService.getGoodslist(function (data) {
      expect(data.length).toBe(2);
    });
    $httpBackend.flush();
  });

  it('getGoods: should return a goods', function () {
    $httpBackend.expectGET('/api/items/item').respond(goodsList);
    goodsListService.getGoods('item', function (data) {
      expect(data).toEqual(goodsList);
    });
    $httpBackend.flush();
  });
});
