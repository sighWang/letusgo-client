'use strict';

describe('Controller:PayCtrl', function () {
  var $scope, createController, cartService, $controller;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      cartService = $injector.get('CartService');
      createController = function () {
        return $controller('PayCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('pay.js', function () {

    it('shoule be no highLight', function () {
      spyOn($scope, '$emit');
      createController();
      expect($scope.$emit).toHaveBeenCalledWith('payHighLight');
    });

    it('$scope.goodsList: should get catgory and total', function () {
      spyOn(cartService, 'getCategory').and.callFake(function (callback) {
        callback([1, 2], 22);
      });
      createController();
      cartService.getCategory(function (data, total) {
        expect($scope.customGoodsList).toEqual(data);
        expect($scope.total).toEqual(total);
      });
    });
  });
});
