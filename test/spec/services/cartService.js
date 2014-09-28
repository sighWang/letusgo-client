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
      var id = 'IED00000';
      $httpBackend.expectPOST('/api/customItems/' + id).respond('success');
      spyOn($httpBackend, 'expectPOST');
      cartService.updateGoodsNumberById(id, 'dsf');
      $httpBackend.flush();
    });

    it('test getCategory: total should be a number', function () {
      var resData = {categories: 'category', total: 'total'};
      $httpBackend.expectGET('/api/customItems').respond(200, resData);
      cartService.getCategory(function (data, total){
        expect(data).toBe('category');
        expect(total).toBe('total');
      });
      $httpBackend.flush();
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
