//'use strict';
//describe('Service: goodsListService', function () {
//  var goodsListService, storeList = {}, localStorageService, $scope , storageService;
//
//  beforeEach(function () {
//    module('letusgoApp');
//    inject(function ($injector) {
//      $scope = $injector.get('$rootScope').$new();
//      localStorageService = $injector.get('localStorageService');
//      goodsListService = $injector.get('goodsListService');
//      storageService = $injector.get('StorageService');
//    });
//    spyOn(localStorageService, 'get').and.callFake(function (key) {
//      return storeList[key];
//    });
//
//    spyOn(localStorageService, 'set').and.callFake(function (key, value) {
//      storeList[key] = value;
//    });
//    var goodsList = [];
//    var cocacola = {id: 'ITEM000000', name: '可口可乐', unit: '瓶', price: 3.00, category: 'drink'};
//    var sprite = {id: 'ITEM000001', name: '雪碧', unit: '瓶', price: 3.00, category: 'drink'};
//    var lychee = {id: 'ITEM000002', name: '荔枝', unit: '斤', price: 15.00, category: 'fruit'};
//    var badminton = {id: 'ITEM000003', name: '羽毛球', unit: '个', price: 4.50, category: 'sport'};
//    goodsList.push(cocacola, sprite, lychee, badminton);
//    localStorageService.set('goodsList', goodsList);
//  });
//
//  it('goodsList: should be defined', function () {
//    expect(goodsListService.goodsList.length).toEqual(jasmine.any(Number));
//    expect(goodsListService.goodsList.length).toEqual(4);
//  });
//
//  it('getGoodsList: localStorageService.get should be called', function () {
//    goodsListService.getGoodslist();
//    expect(localStorageService.get).toHaveBeenCalledWith('goodsList');
//  });
//
//  it('editGoodsList: localStorageService.set should be called', function () {
//    goodsListService.editGoodsList([
//      {id: '2', name: '2', cartgary: '2'}
//    ]);
//    expect(localStorageService.set).toHaveBeenCalledWith('goodsList', [
//      {id: '2', name: '2', cartgary: '2'}
//    ]);
//  });
//
//  it('editGoods: goodsListService.editGoodsList hava been called', function () {
//    spyOn(goodsListService, 'editGoodsList');
//    goodsListService.editGoods({id: '2', name: '2', category: '2'});
//    expect(goodsListService.editGoodsList).toHaveBeenCalled();
//  });
//
//  it('addGoods: goodsList length should be add one', function () {
//    spyOn(goodsListService,'editGoodsList');
//    goodsListService.addGoods({id: 'ITEM000003', name: '羽毛球', unit: '个', price: 4.50, category: 'sport'});
//    expect(goodsListService.editGoodsList).toHaveBeenCalled();
//    expect(localStorageService.set).toHaveBeenCalled();
//    expect(localStorageService.get('goodsList').length).toEqual(5);
//  });
//
//  it('remove: goodsList length should be minus one', function () {
//    goodsListService.removeGoods({id: '2', name: '2', category: '2'});
//    expect(localStorageService.get('goodsList').length).toEqual(3);
//  });
//});
