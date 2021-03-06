'use strict';

describe('Controller: indexCtrl', function () {
  var $scope, createController, CartServices, $controller, $rootScope;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      CartServices = $injector.get('CartService');
      $rootScope = $injector.get('$rootScope');

      createController = function () {
        return $controller('IndexCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('index.js', function () {

    it('$scope.cartNumber: should be a number', function () {
      spyOn(CartServices, 'getCartNumber').and.callFake(function (callback) {
        callback(4);
      });
      createController();
      expect($scope.cartNumber).toEqual(4);
    });

    it('it should catch updateCartNumber event', function () {
      createController();
      spyOn(CartServices, 'getCartNumber');
      $rootScope.$broadcast('updateCartNumber');
      expect(CartServices.getCartNumber).toHaveBeenCalled();
    });

    it('it should catch highLight event', function () {
      createController();
      $rootScope.$broadcast('cartHighLight');
      expect($scope.cartActive).toEqual('active');
      expect($scope.listActive).toEqual('');
    });

    it('it should catch highLight event', function () {
      createController();
      $rootScope.$broadcast('payHighLight');
      expect($scope.cartActive).toEqual('');
      expect($scope.listActive).toEqual('');
    });


    it('it should catch highLight event', function () {
      createController();
      $rootScope.$broadcast('listHighLight');
      expect($scope.cartActive).toEqual('');
      expect($scope.listActive).toEqual('active');
    });

    it('it should catch highLight event', function () {
      createController();
      $rootScope.$broadcast('welcomeHighLight');
      expect($scope.cartActive).toEqual('');
      expect($scope.listActive).toEqual('');
    });

  });
});
