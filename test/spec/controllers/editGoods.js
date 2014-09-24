'use strict';

describe('Controller: EditGoodsCtrl', function () {
  var $scope, createController, GoodsListService, $controller;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      GoodsListService = $injector.get('GoodsListService');

      createController = function () {
        return $controller('EditGoodsCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('editGoods.js', function () {
    it('categoryService.editCategory should be called', function () {
      spyOn(GoodsListService, 'editGoods');
      createController();
      $scope.edit({id: '4', name: '5'});
      expect(GoodsListService.editGoods).toHaveBeenCalledWith({id: '4', name: '5'});
    })
  });
});
