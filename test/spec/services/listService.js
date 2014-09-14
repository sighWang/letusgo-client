'use strict';
describe('Service: goodsListService', function () {
  var goodsListService, storeList = {}, localStorageService, $scope , myStorageService;

  beforeEach(function () {
    module('yeomanLetusgoApp');
    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      localStorageService = $injector.get('localStorageService');
      goodsListService = $injector.get('goodsListService');
      myStorageService = $injector.get('MyStorageService');
    });
    spyOn(localStorageService, 'get').andCallFake(function (key) {
      return storeList[key];
    });

    spyOn(localStorageService, 'set').andCallFake(function (key, value) {
      storeList[key] = value;
    });
    myStorageService.initData(localStorageService);
  });

//  it('goodsList: should be defined', function () {
//    //expect(goodsListService.goodsList.length).toEqual(jasmine.any(Number));
//   // expect(goodsListService.goodsList.length).toEqual(3);
//  });

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
//    goodsListService.editGoods({id: '2', name: '2', cartgary: '2'});
//    expect(goodsListService.editGoodsList).toHaveBeenCalled();
//  });
//
//  it('addGoods: goodsList length should be add one', function () {
//    var length = goodsListService.goodsList.length;
//    goodsListService.addGoods({id: '2', name: '2', cartgary: '2'});
//    expect(goodsListService.goodsList.length).toEqual(length + 1);
//  });
//
//  it('remove: goodsList length should be minus one', function () {
//    var length = goodsListService.goodsList.length;
//    goodsListService.removeGoods({id: '2', name: '2', cartgary: '2'});
//    expect(goodsListService.goodsList.length).toEqual(length - 1);
//  });
});
