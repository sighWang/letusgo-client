'use strict';
describe('Service: goodsListService', function () {
  var goodsListService, $scope, $httpBackend, goodsList, $http;

  beforeEach(function () {
    module('letusgoApp');
    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      goodsListService = $injector.get('GoodsListService');
      $httpBackend = $injector.get('$httpBackend');
      $http = $injector.get('$http');
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

  it('editGoods: should http.put be called', function () {
    spyOn($http, 'put');
    goodsListService.editGoods({id: '5', name: '5', unit: '5', price: '5', category: '8' });
    expect($http.put).toHaveBeenCalled();
  });

  it('addGoods: should http.post be called', function () {
    var goods = {id: '5', name: '5', unit: '5', price: '5', category: '8' };
    spyOn($http, 'post');
    goodsListService.addGoods(goods);
    expect($http.post).toHaveBeenCalledWith('/api/items', {data: goods});
  });

  it('removeGoods: should http.delete be called', function () {
    var goods = {id: '5', name: '5', unit: '5', price: '5', category: '8' };
    spyOn($http, 'delete');
    goodsListService.removeGoods(goods);
    expect($http.delete).toHaveBeenCalledWith('api/items/' + goods.id);
  });

  it('should store goodsId ', function () {
    goodsListService.storeGoodsId('goodsId');
    expect(goodsListService.temporaryId).toEqual('goodsId');
  });

  it('should get temporaryId', function () {
    goodsListService.storeGoodsId('goodsId');
    expect(goodsListService.getStoreGoodsId()).toEqual('goodsId');
  });

  it('isContain: should contain', function () {
    var result = goodsListService.isContain(goodsList, '5');
    expect(result).toEqual(true);
  });

  it('isContain: should not contain', function () {
    var result = goodsListService.isContain(goodsList, '4');
    expect(result).toEqual(false);
  });
});
