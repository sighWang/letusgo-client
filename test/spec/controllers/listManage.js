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

  describe('ListmanageCtrl.js', function () {
    it('test showEdit:GoodsListService.storeGoodsId should be called', function () {
      var goods = {id: 'ITEM000002', name: '荔枝', unit: '斤', price: 15.00, category: 'fruit'};
      spyOn(goodsListService, 'storeGoodsId');
      createController();
      $scope.showEdit(goods);
      expect(goodsListService.storeGoodsId).toHaveBeenCalledWith(goods.id);
    });

    it('removeItem : goodsList should be minus one', function () {
      spyOn(goodsListService, 'removeGoods');
      createController();
      var badminton = {id: 'ITEM000002', name: '荔枝', unit: '斤', price: 15.00, category: 'fruit'};
      $scope.removeItem(badminton);
      expect(goodsListService.removeGoods).toHaveBeenCalledWith(badminton);
    });

    it('$scope.goodsList should to be define', function () {
      spyOn(goodsListService, 'getGoodslist').and.callFake(function (callback) {
        callback('goodsList');
      });
      createController();
      expect($scope.goodsList).toEqual('goodsList');
    })
  });
});
