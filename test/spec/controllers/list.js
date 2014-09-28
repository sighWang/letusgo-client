'use strict';

describe('Controller: indexCtrl', function () {
  var $scope, createController, GoodsListService, $controller, cartService;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      GoodsListService = $injector.get('GoodsListService');
      cartService = $injector.get('CartService');
      createController = function () {
        return $controller('ListCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('list.js', function () {

    it('$scope.goodsList: should be a number', function () {
      var items = [
        {id: 'ITEM000002', name: '荔枝', unit: '斤', price: 15.00, category: 'fruit'}
      ];
      spyOn(GoodsListService, 'getGoodslist').and.callFake(function (callback) {
        callback(items);
      });
      spyOn($scope, '$emit');
      createController();
      GoodsListService.getGoodslist(function (data) {
        expect($scope.goodsList).toEqual(data);
      });
      expect($scope.$emit).toHaveBeenCalledWith('listHighLight');
    });

    it('addOneToCart:should call cartService.updateGoodsNumberById', function () {
      createController();
      spyOn($scope, '$emit');
      spyOn(cartService, 'updateGoodsNumberById');
      $scope.addOneToCart({id: 'ITEM000002', name: '荔枝', unit: '斤', price: 15.00, category: 'fruit'});
      expect($scope.$emit).toHaveBeenCalledWith('updateCartNumber');
      expect(cartService.updateGoodsNumberById).toHaveBeenCalledWith('ITEM000002', 1);
    });
  });
});
