'use strict';

describe('Controller: addGoodsCtrl', function () {
  var $scope, createController, goodsListService, $controller;

  beforeEach(function () {
    module('yeomanLetusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      goodsListService = $injector.get('goodsListService');

      createController = function () {
        return $controller('AddGoodsCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('addGoods.js', function () {
    it('catagary shoude be add', function () {
      spyOn(goodsListService, 'addGoods');
      createController();
      $scope.add({id: '5', name: '5'});
      expect(goodsListService.addGoods).toHaveBeenCalledWith({id: '5', name: '5'});
    });
  });
});
