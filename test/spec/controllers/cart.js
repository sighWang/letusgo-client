'use strict';

describe('Controller: CatrCtrl should be test correct ', function () {
  var $scope, createController, cartService, $controller;

//  beforeEach(function () {
//    module('letusgoApp');
//
//    inject(function ($injector) {
//
//      $scope = $injector.get('$rootScope').$new();
//      $controller = $injector.get('$controller');
//      cartService = $injector.get('cartService');
//
//      createController = function () {
//        return $controller('CartCtrl', {
//          $scope: $scope
//        });
//      };
//    });
//  });
//
//  describe('cart.js should be test correct', function () {
//    it('cart should be highLight', function () {
//      spyOn($scope, '$emit');
//      createController();
//      expect($scope.$emit).toHaveBeenCalledWith('cartHighLight');
//    });
//
//    it('$scope.catagarys: should be a number', function () {
//      createController();
//      expect($scope.catagarys).toEqual(jasmine.any(Object));
//    });
//    it('addOneToCart:should call cartService.addGoodsNumberById', function () {
//      createController();
//      spyOn(cartService, 'addGoodsNumberById');
//      spyOn(cartService, 'getTotal');
//      spyOn(cartService, 'getCartNumber');
//      spyOn(cartService, 'getCatagary');
//      spyOn($scope, '$emit');
//      var good = new Goods('ITEM000002', '荔枝', '斤', 15.00, 'fruit');
//      $scope.addOneToCart({goods: good, number: 2});
//      expect(cartService.addGoodsNumberById).toHaveBeenCalledWith('ITEM000002');
//      expect(cartService.getTotal).toHaveBeenCalled();
//      expect(cartService.getCatagary).toHaveBeenCalled();
//      expect($scope.$emit).toHaveBeenCalledWith('updateCartNumber');
//    });
//    it('minusGoodsNumberById:should call cartService.minusGoodsNumberById', function () {
//      createController();
//      spyOn(cartService, 'minusGoodsNumberById');
//      spyOn($scope, '$emit');
//      var good = new Goods('ITEM000002', '荔枝', '斤', 15.00, 'fruit');
//      $scope.minusOneToCart({goods: good, number: 2});
//      expect(cartService.minusGoodsNumberById).toHaveBeenCalledWith('ITEM000002');
//      expect($scope.$emit).toHaveBeenCalledWith('updateCartNumber');
//    });
//  });
});
