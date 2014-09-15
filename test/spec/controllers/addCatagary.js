'use strict';

describe('Controller: addCategoryCtrl', function () {
  var $scope, createController, categoryService, $controller;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      categoryService = $injector.get('categoryService');

      createController = function () {
        return $controller('AddCategoryCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('addcategory.js', function () {
    it('category shoude be add', function () {
      spyOn(categoryService, 'addCategory');
      createController();
      $scope.add({id: '5', name: '5'});
      expect(categoryService.addCategory).toHaveBeenCalledWith({id: '5', name: '5'});
    });
  });
});
