'use strict';
describe('Controller: ListmanageCtrl', function () {
  var $scope, createController, goodsListService, $controller;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      goodsListService = $injector.get('GoodsListService');

      createController = function () {
        return $controller('ListmanageCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('goodsListManageCtrl add remove edit get', function () {
    it('should can get all goods', function () {
      spyOn(goodsListService,'getGoodslist');
      createController();
      expect(goodsListService.getGoodslist).toHaveBeenCalled();
    });

    it('removeItem : goodsList should be minus one', function () {
      spyOn(goodsListService,'removeGoods');
      createController();
      var badminton = {id:'ITEM000002', name:'荔枝', unit:'斤', price:15.00, category:'fruit'};
      $scope.removeItem(badminton);
      expect(goodsListService.removeGoods).toHaveBeenCalled();
    });
  });
});
