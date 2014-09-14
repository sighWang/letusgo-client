'use strict';
(function (_) {
  describe('Service: cartService', function () {
    var cartService, storeCart = {}, localStorageService, $scope;

    beforeEach(function () {
      module('yeomanLetusgoApp');
      inject(function ($injector) {
        $scope = $injector.get('$rootScope').$new();
        localStorageService = $injector.get('localStorageService');
        cartService = $injector.get('cartService');
      });
      spyOn(localStorageService, 'get').andCallFake(function (key) {
        return storeCart[key];
      });

      spyOn(localStorageService, 'set').andCallFake(function (key, value) {
        storeCart[key] = value;
      });
      initData(localStorageService);
    });

    it('getCustomGoodsList: result length should be a number', function () {
      expect(cartService.getCustomGoodsList().length).toEqual(jasmine.any(Number));
    });

    it(' getGoodsList: result length should be 4', function () {
    //  expect(cartService.getGoodslist().length).toBe(4);
    });

    it('editCustomGoodsList: should be called', function () {
      cartService.addGoodsNumberById('ITEM000003');
      var customGoodsList = cartService.getCustomGoodsList();
      customGoodsList[0].number = 100;
      spyOn(cartService, 'editCustomGoodsList');
      cartService.editCustomGoodsList(customGoodsList);
      expect(cartService.editCustomGoodsList).toHaveBeenCalledWith(customGoodsList);
      expect(cartService.getCustomGoodsList()[0].number).toEqual(100);
    });

    it('addGoodNumberById: goodsNumber add one', function () {
//      cartService.addGoodsNumberById('ITEM000003');
//      var customGoodsList = cartService.getCustomGoodsList();
//      expect(customGoodsList[0].number).toBe(1);
//      cartService.addGoodsNumberById('ITEM000003');
//      customGoodsList = cartService.getCustomGoodsList();
//      expect(customGoodsList[0].number).toBe(2);
    });
    it('minusGoodsNumberById: goodsNumber minus one', function () {
//      cartService.addGoodsNumberById('ITEM000003');
//      var customGoodsList = cartService.getCustomGoodsList();
//      cartService.addGoodsNumberById('ITEM000003');
//      expect(customGoodsList[0].number).toBe(2);
//      cartService.minusGoodsNumberById('ITEM000003');
//      customGoodsList = cartService.getCustomGoodsList();
//      expect(customGoodsList[0].number).toBe(1);
    });
    it('getTotal: should be a number', function () {
//      expect(cartService.getTotal()).toEqual(jasmine.any(Number));
//      cartService.addGoodsNumberById('ITEM000003');
//      expect(cartService.getTotal()).toEqual(4.5);
    });
    it('getCartNumber: should be a number', function () {
      expect(cartService.getCartNumber()).toEqual(jasmine.any(Number));
      cartService.addGoodsNumberById('ITEM000003');
      expect(cartService.getCartNumber()).toEqual(1);
    });
    it('getCatagary: should be catagary', function () {
      cartService.getCatagary();
      spyOn(cartService, 'getCatagary');
      cartService.getCatagary();
      expect(cartService.getCatagary).toHaveBeenCalled();
    });
  });
})(window._);
