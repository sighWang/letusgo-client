'use strict';

describe('Controller: EditGoodsCtrl', function () {
  var $scope, createController, goodsListService, $controller;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      goodsListService = $injector.get('goodsListService');

      createController = function () {
        return $controller('EditGoodsCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('editGoods.js', function () {
    it('goods should be get', function () {
      spyOn(goodsListService, 'getStoreGoods').and.returnValue({id: '4', name: '5'});
      createController();
      expect($scope.goods).toEqual(jasmine.any(Object));
    });
    it('catagaryService.editCatagary should be called', function () {
      spyOn(goodsListService, 'editGoods');
      createController();
      $scope.edit({id: '4', name: '5'});
      expect(goodsListService.editGoods).toHaveBeenCalledWith({id: '4', name: '5'});
    })
  });
});
