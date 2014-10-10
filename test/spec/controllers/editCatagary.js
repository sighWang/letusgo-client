'use strict';

describe('Controller: EditCategoryCtrl', function () {
  var $scope, createController, CategoryService, $controller;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      CategoryService = $injector.get('CategoryService');
      createController = function () {
        return $controller('EditCategoryCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('editCategory.js', function () {
    it('category should be get', function () {
      spyOn(CategoryService, 'getStoreCategory').and.returnValue({id: '4', name: '5'});
      createController();
      expect($scope.category).toEqual(jasmine.any(Object));
    });
    it('CategoryService.editCategory should be called', function () {
      spyOn(CategoryService, 'editCategory');
      createController();
      $scope.edit({id: '4', name: '5'});
      expect(CategoryService.editCategory).toHaveBeenCalledWith({id: '4', name: '5'});
    });

    it('CategoryService.editCategory  should be filed to add nul', function () {
      spyOn(CategoryService, 'editCategory');
      createController();
      $scope.edit({id: '4'});
      expect($scope.tip).toEqual('请填写完整信息');
    })
  });
});
