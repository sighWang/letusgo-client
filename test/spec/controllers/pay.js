'use strict';

describe('Controller:PayCtrl', function () {
  var $scope, createController, cartService, $controller, localStorageService;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      cartService = $injector.get('cartService');
      localStorageService = $injector.get('localStorageService');
      createController = function () {
        return $controller('PayCtrl', {
          $scope: $scope
        });
      };
    });
    spyOn(localStorageService,'get').and.callFake(function () {
      return [{goods:{id: 'ITEM000003', name: '羽毛球', unit: '个', price: 4.50, category: 'sport'}, number:2}];
    });
  });

  describe('pay.js', function () {

    it('shoule be no highLight', function () {
      spyOn($scope, '$emit');
      createController();
      expect($scope.$emit).toHaveBeenCalledWith('payHighLight');
    });

    it('$scope.goodsList: should be a number', function () {
      createController();
      expect($scope.customGoodsList.length).toEqual(jasmine.any(Number));
    });

    it('$scope.goodsList: should be a number', function () {
      createController();
      expect($scope.total).toEqual(jasmine.any(Number));
    });
  });
});
