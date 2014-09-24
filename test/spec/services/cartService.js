'use strict';
(function (_) {
  describe('Service: test cartService should be correct', function () {
    var cartService, $scope;

    beforeEach(function () {
      module('letusgoApp');
      inject(function ($injector) {
        $scope = $injector.get('$rootScope').$new();
        cartService = $injector.get('CartService');
      });

    });

    it('addGoodNumberById: goodsNumber add one', function () {
      cartService.addGoodsNumberById('ITEM000003');
      var customGoodsList = cartService.getCustomGoodsList();
      expect(customGoodsList[0].number).toBe(3);
      cartService.addGoodsNumberById('ITEM000002');
      customGoodsList = cartService.getCustomGoodsList();
      expect(customGoodsList[1].number).toBe(1);
    });
    it('minusGoodsNumberById: goodsNumber minus one', function () {
      cartService.minusGoodsNumberById('ITEM000003');
      var customGoodsList = cartService.getCustomGoodsList();
      expect(customGoodsList[0].number).toBe(1);
      cartService.minusGoodsNumberById('ITEM000003');
      expect(customGoodsList[0]).toBeUndefined();
    });

    it('getTotal: should be a number', function () {
      expect(cartService.getTotal()).toEqual(jasmine.any(Number));
      expect(cartService.getTotal()).toEqual(9);
    });
    it('categories should be got', function () {

    });

    it('getCartNumber: should be a number', function () {
      expect(cartService.getCartNumber()).toEqual(2);
    });
  });
})(window._);
