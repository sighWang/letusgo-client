'use strict';
describe('Controller: ListmanageCtrl', function () {
  var $scope,storeCart = {}, createController, goodsListService, $controller, storageService, localStorageService;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      goodsListService = $injector.get('goodsListService');
      storageService = $injector.get('StorageService');
      localStorageService = $injector.get('localStorageService');

      createController = function () {
        return $controller('ListmanageCtrl', {
          $scope: $scope
        });
      };
    });
    spyOn(localStorageService, 'get').and.callFake(function (key) {
      return storeCart[key];
    });

    spyOn(localStorageService, 'set').and.callFake(function (key, value) {
      storeCart[key] = value;
    });
    storageService.initData();
  });

  describe('goodsListManageCtrl add remove edit get', function () {
    it('should can get all goods', function () {
      spyOn(goodsListService,'getGoodslist');
      createController();
      expect(goodsListService.getGoodslist).toHaveBeenCalled();
    });

    it('showEdit : goodsListService.storeGoods should be called', function () {
      createController();
      spyOn(goodsListService, 'storeGoods');
      $scope.showEdit({id: '2'});
      expect(goodsListService.storeGoods).toHaveBeenCalledWith({id: '2'});
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
