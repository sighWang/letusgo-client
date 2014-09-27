'use strict';
describe('Controller: categoryManagageCtrl', function () {
  var $scope, createController, categoryService, $controller;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      categoryService = $injector.get('CategoryService');

      createController = function () {
        return $controller('CategoryManageCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('categoryManageCtrl add remove edit get', function () {

    it('category shoule store to categoryService', function () {
      createController();
      spyOn(categoryService, 'storeCategory');
      $scope.showEdit({id: '3', name: 'haha'});
      expect(categoryService.storeCategory).toHaveBeenCalledWith({id: '3', name: 'haha'});
    });

    it('remove Item', function () {
      spyOn(categoryService,'removeCategory').and.callFake(function(category,callback){
        callback(true);
      });

      createController();
      $scope.removeItem({id: '3', name: '4'});
      expect(categoryService.removeCategory).toHaveBeenCalled();
    });
  });
});
