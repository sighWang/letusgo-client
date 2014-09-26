'use strict';

describe('Controller: addGoodsCtrl', function () {
  var $scope, createController, GoodsListService, $controller;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      GoodsListService = $injector.get('GoodsListService');

      createController = function () {
        return $controller('AddGoodsCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('test addGoods.js', function () {
    it('category shoude be add', function () {
      spyOn(GoodsListService, 'addGoods');
      createController();
      $scope.add({id: '5', name: '5',unit: '5', price: '5', category: '5' });
      expect(GoodsListService.addGoods).toHaveBeenCalledWith({id: '5', name: '5',unit: '5', price: '5', category: '5' });
    });
  });
});
