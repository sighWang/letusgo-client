'use strict';
(function (_) {
  describe('Service: test cartService should be correct', function () {
    var cartService, $scope, $httpBackend;

    beforeEach(function () {
      module('letusgoApp');
      inject(function ($injector) {
        $scope = $injector.get('$rootScope').$new();
        cartService = $injector.get('CartService');
        $httpBackend = $injector.get('$httpBackend');
      });

    });

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('test updateGoodsNumberById: goodsNumber add one', function () {
//      cartService.addGoodsNumberById('ITEM000003');
//      var customGoodsList = cartService.getCustomGoodsList();
//      expect(customGoodsList[0].number).toBe(3);
//      cartService.addGoodsNumberById('ITEM000002');
//      customGoodsList = cartService.getCustomGoodsList();
//      expect(customGoodsList[1].number).toBe(1);
    });
    it('test updateGoodsNumberById: goodsNumber minus one', function () {
//      $httpBackend.expectPOST('/api/customItems/');

    });

    it('test getCategory: total should be a number', function () {
//      var resData = 11;
//      $httpBackend.expectGET('/api/customItems').respond(200, resData);
//      cartService.getCategory(function (data){
//        expect(data).toBe(11);
//      });
//      $httpBackend.flush();
    });
    it('test getCategory : should get custonItems from serve', function () {
//      var result = 0;
//      var callback = function (data) {
//        result = data;
//        expect(data).toBe(customItems[0].categories);
//      };
//      var customItems = [{categories:{goods:'goods', number: 'number', subtotal: 'subtatal'}, total: 'total'}];
//      $httpBackend.expectGET('/api/customItems').respond(200, customItems);
//      cartService.getCategory(callback);
////      expect(result).toBe(customItems[0].categories);
//      $httpBackend.flush();
    });

    it('getCartNumber: should get cartNumber from serve', function () {
      var resData = 11;
      $httpBackend.expectGET('/api/customItems/cartNumber').respond(200, resData);
      cartService.getCartNumber(function (data) {
        expect(data).toBe(11);
      });
      $httpBackend.flush();
    });
  });
})(window._);
