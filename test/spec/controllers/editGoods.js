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
    });

    it('$scope.goods is get', function () {
    var id = 'ITEM000000';
    var items = {name: '可口可乐', unit: '瓶', price: 3.00, category: '饮料'};
     spyOn(GoodsListService,'getGoods').and.callFake(function(id, callback){
            callback(items);
          });

          createController();

          GoodsListService.getGoods(id, function(data){
            expect($scope.goods).toEqual(data);
          });

    })
  });
});
