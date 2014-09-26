'use strict';

describe('Controller: CatrCtrl should be test correct ', function () {
  var $scope, createController, cartService, $controller;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      cartService = $injector.get('CartService');
      createController = function () {
        return $controller('CartCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('cart.js should be test correct', function () {
    it('cart should be highLight', function () {
      spyOn($scope, '$emit');
      createController();
      expect($scope.$emit).toHaveBeenCalledWith('cartHighLight');
    });

    it('addOneToCart:should call cartService.updateGoodsNumberById', function () {
      spyOn(cartService, 'updateGoodsNumberById');
      spyOn($scope, '$emit');
      createController();
      var id = 'ITEM000002';
      $scope.addOneToCart(id);
      expect($scope.$emit).toHaveBeenCalledWith('updateCartNumber');
      expect(cartService.updateGoodsNumberById).toHaveBeenCalledWith(id, 1)
    });
    it('minusGoodsNumberById:should call cartService.minusGoodsNumberById', function () {
      createController();
      spyOn(cartService, 'updateGoodsNumberById');
      spyOn($scope, '$emit');
      var id = 'ITEM000002';
      $scope.minusOneToCart(id);
      expect($scope.$emit).toHaveBeenCalledWith('updateCartNumber');
      expect(cartService.updateGoodsNumberById).toHaveBeenCalledWith(id, -1)
    });
  });
});
