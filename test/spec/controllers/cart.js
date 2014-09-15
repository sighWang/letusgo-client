'use strict';

describe('Controller: CatrCtrl should be test correct ', function () {
  var $scope, createController, cartService, $controller, localStorageService,  storageService;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      cartService = $injector.get('cartService');
      localStorageService = $injector.get('localStorageService');
      storageService = $injector.get('StorageService');
      createController = function () {
        return $controller('CartCtrl', {
          $scope: $scope
        });
      };
    });
    storageService.initData();
    spyOn(localStorageService,'get').and.callFake(function () {
      return [{goods:{id: 'ITEM000003', name: '羽毛球', unit: '个', price: 4.50, category: 'sport'}, number:2}];
    });
  });

  describe('cart.js should be test correct', function () {
    it('cart should be highLight', function () {
      spyOn($scope, '$emit');
      createController();
      localStorageService.set('customGoodsList',{goods:{id: 'ITEM000003', name: '羽毛球', unit: '个', price: 4.50, category: 'sport'}, number:2});
      expect($scope.$emit).toHaveBeenCalledWith('cartHighLight');
    });

    it('$scope.categorys: should be a number', function () {
      createController();
      expect($scope.categorys).toEqual(jasmine.any(Object));
    });
    it('addOneToCart:should call cartService.addGoodsNumberById', function () {
      createController();
      spyOn(cartService, 'addGoodsNumberById');
      spyOn(cartService, 'getTotal');
      spyOn(cartService, 'getCartNumber');
      spyOn(cartService, 'getCategory');
      spyOn($scope, '$emit');
      var good = {id:'ITEM000002', name:'荔枝', unit:'斤', price:15.00, category:'fruit'};
      $scope.addOneToCart({goods: good, number: 2});
      expect(cartService.addGoodsNumberById).toHaveBeenCalledWith('ITEM000002');
      expect(cartService.getTotal).toHaveBeenCalled();
      expect(cartService.getCategory).toHaveBeenCalled();
      expect($scope.$emit).toHaveBeenCalledWith('updateCartNumber');
    });
    it('minusGoodsNumberById:should call cartService.minusGoodsNumberById', function () {
      createController();
      spyOn(cartService, 'minusGoodsNumberById');
      spyOn($scope, '$emit');
      var good = {id:'ITEM000002', name:'荔枝', unit:'斤', price:15.00, category:'fruit'};
      $scope.minusOneToCart({goods: good, number: 2});
      expect(cartService.minusGoodsNumberById).toHaveBeenCalledWith('ITEM000002');
      expect($scope.$emit).toHaveBeenCalledWith('updateCartNumber');
    });
  });
});
