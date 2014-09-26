'use strict';

describe('Controller: addGoodsCtrl', function () {
  var $scope, createController, GoodsListService, $controller, CategoryService;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      GoodsListService = $injector.get('GoodsListService');
      CategoryService = $injector.get('CategoryService');
      createController = function () {
        return $controller('AddGoodsCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('test addGoods.js', function () {
    it('category should be add', function () {
      spyOn(GoodsListService, 'addGoods');
      createController();
      $scope.add({id: '5', name: '5',unit: '5', price: '5', category: '5' });
      expect(GoodsListService.addGoods).toHaveBeenCalledWith({id: '5', name: '5',unit: '5', price: '5', category: '5' });
    });

    it('categories should be defined', function () {
      var categories = ["饮料", "水果","运动器材"];
      spyOn(CategoryService,'getCategories').and.callFake(function(callback){
        callback(categories);
      });
      createController();
      CategoryService.getCategories(function(data){
        expect($scope.categories).toEqual(data);
      });
    });
  });
});
