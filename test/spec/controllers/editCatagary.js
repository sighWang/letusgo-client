'use strict';

describe('Controller: EditCategoryCtrl', function () {
  var $scope, createController, categoryService, $controller;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      categoryService = $injector.get('categoryService');

      createController = function () {
        return $controller('EditCategoryCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('editCategory.js', function () {
    it('category should be get', function () {
      spyOn(categoryService, 'getStoreCategory').and.returnValue({id: '4', name: '5'});
      createController();
      expect($scope.category).toEqual(jasmine.any(Object));
    });
    it('categoryService.editCategory should be called', function () {
      spyOn(categoryService, 'editCategory');
      createController();
      $scope.edit({id: '4', name: '5'});
      expect(categoryService.editCategory).toHaveBeenCalledWith({id: '4', name: '5'});
    })
  });
});
