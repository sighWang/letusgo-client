//'use strict';
//(function (_) {
//  describe('Service: test cartService should be correct', function () {
//    var cartService, storeCart = {}, localStorageService, $scope , storageService;
//
//    beforeEach(function () {
//      module('letusgoApp');
//      inject(function ($injector) {
//        $scope = $injector.get('$rootScope').$new();
//        localStorageService = $injector.get('localStorageService');
//        storageService = $injector.get('StorageService');
//        cartService = $injector.get('cartService');
//      });
//      spyOn(localStorageService, 'get').and.callFake(function (key) {
//        return storeCart[key];
//      });
//
//      spyOn(localStorageService, 'set').and.callFake(function (key, value) {
//        storeCart[key] = value;
//      });
//      storageService.initData();
//      localStorageService.set('goodsList', [{id: 'ITEM000003', name: '羽毛球', unit: '个', price: 4.50, category: 'sport'},
//        {id: 'ITEM000002', name: '荔枝', unit: '斤', price: 15.00, category: 'fruit'}]);
//      localStorageService.set('customGoodsList', [{goods:{id: 'ITEM000003', name: '羽毛球', unit: '个', price: 4.50, category: 'sport'}, number:2}]);
//    });
//
//    it('getCustomGoodsList: result length should be a number', function () {
//      localStorageService.set('customGoodsList',
//        [{goods:{id: 'ITEM000003', name: '羽毛球', unit: '个', price: 4.50, category: 'sport'}, number:2}]);
//      expect(cartService.getCustomGoodsList().length).toEqual(jasmine.any(Number));
//    });
//
//    it(' getGoodsList: result length should be 2', function () {
//      expect(cartService.getGoodslist().length).toBe(2);
//    });
//
//    it('editCustomGoodsList: should be called', function () {
//      cartService.addGoodsNumberById('ITEM000003');
//      var customGoodsList = cartService.getCustomGoodsList();
//      customGoodsList[0].number = 100;
//      spyOn(cartService, 'editCustomGoodsList');
//      cartService.editCustomGoodsList(customGoodsList);
//      expect(cartService.editCustomGoodsList).toHaveBeenCalledWith(customGoodsList);
//      expect(cartService.getCustomGoodsList()[0].number).toEqual(100);
//    });
//
//    it('addGoodNumberById: goodsNumber add one', function () {
//      cartService.addGoodsNumberById('ITEM000003');
//      var customGoodsList = cartService.getCustomGoodsList();
//      expect(customGoodsList[0].number).toBe(3);
//      cartService.addGoodsNumberById('ITEM000002');
//      customGoodsList = cartService.getCustomGoodsList();
//      expect(customGoodsList[1].number).toBe(1);
//    });
//    it('minusGoodsNumberById: goodsNumber minus one', function () {
//      cartService.minusGoodsNumberById('ITEM000003');
//      var customGoodsList = cartService.getCustomGoodsList();
//      expect(customGoodsList[0].number).toBe(1);
//      cartService.minusGoodsNumberById('ITEM000003');
//      expect(customGoodsList[0]).toBeUndefined();
//    });
//    it('getTotal: should be a number', function () {
//      expect(cartService.getTotal()).toEqual(jasmine.any(Number));
//      expect(cartService.getTotal()).toEqual(9);
//    });
//    it('getCartNumber: should be a number', function () {
//      expect(cartService.getCartNumber()).toEqual(2);
//    });
//  });
//})(window._);
