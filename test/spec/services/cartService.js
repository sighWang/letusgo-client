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

    it('test updateGoodsNumberById: goodsNumber add one', function () {
//      cartService.addGoodsNumberById('ITEM000003');
//      var customGoodsList = cartService.getCustomGoodsList();
//      expect(customGoodsList[0].number).toBe(3);
//      cartService.addGoodsNumberById('ITEM000002');
//      customGoodsList = cartService.getCustomGoodsList();
//      expect(customGoodsList[1].number).toBe(1);
    });
    it('test updateGoodsNumberById: goodsNumber minus one', function () {
//      cartService.minusGoodsNumberById('ITEM000003');
//      var customGoodsList = cartService.getCustomGoodsList();
//      expect(customGoodsList[0].number).toBe(1);
//      cartService.minusGoodsNumberById('ITEM000003');
//      expect(customGoodsList[0]).toBeUndefined();
    });

    it('test getCategory: total should be a number', function () {
//      expect(cartService.getTotal()).toEqual(jasmine.any(Number));
//      expect(cartService.getTotal()).toEqual(9);
    });
    it('test getCategory :category should be an array', function () {

    });
//
//    this.getCartNumber = function (callback) {
//      $http.get('/api/customItems/cartNumber').success(function (data) {
//        callback(data);
//    var controller = createController();
//    $httpBackend.flush();
//    $rootScope.saveMessage('message content');
//    expect($rootScope.status).toBe('Saving...');
//    $httpBackend.flush();
//    expect($rootScope.status).toBe('');
//      });
//    };
    it('getCartNumber: should get cartNumber from serve', function () {
//      $httpBackend.flush();
//      var cartNumber;
//      function callback(data){
//        cartNumber = data;
//      }
//      cartService.getCartNumber(callback);
//      expect(cartNumber).toBe('jdfkaj');
//      $httpBackend.flush();
    });
  });
})(window._);
