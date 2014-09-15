'use strict';

describe('Controller: indexCtrl', function () {
  var $scope, createController, cartService, $controller;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      cartService = $injector.get('cartService');

      createController = function () {
        return $controller('ListCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('list.js', function () {

    it('$scope.goodsList: should be a number', function () {
      spyOn($scope, '$emit');
      createController();
      expect($scope.goodsList.length).toEqual(jasmine.any(Number));
      expect($scope.$emit).toHaveBeenCalledWith('listHighLight');
    });

    it('addOneToCart:should call cartService.addGoodsNumberById', function () {
      createController();
      spyOn($scope, '$emit');
      spyOn(cartService, 'addGoodsNumberById');
      $scope.addOneToCart({id:'ITEM000002', name:'荔枝', unit:'斤', price:15.00, category:'fruit'});
      expect(cartService.addGoodsNumberById).toHaveBeenCalledWith('ITEM000002');
      expect($scope.$emit).toHaveBeenCalledWith('updateCartNumber');
    });
  });
});
