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
      var items = [
        {goods: {name: '可口可乐', unit: '瓶', price: 3.00, category: '饮料'}}
      ];
      var categories = _.groupBy(items, function (custom) {
        return custom.goods.category;
      });
      var total = 12;
      spyOn(cartService, 'getCategory').and.callFake(function (callback) {
        callback(items, total);
      });

      spyOn(cartService, 'updateGoodsNumberById');
      spyOn($scope, '$emit');
      createController();
      var id = 'ITEM000002';
      $scope.minusOneToCart(id);
      expect($scope.$emit).toHaveBeenCalledWith('updateCartNumber');
      expect(cartService.updateGoodsNumberById).toHaveBeenCalledWith(id, -1);
      cartService.getCategory(function (items, total) {
        expect($scope.categories).toEqual(categories);
        expect($scope.total).toEqual(total);
      });
    });
  });
});
