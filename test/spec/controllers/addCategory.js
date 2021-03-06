'use strict';

describe('Controller: addCategoryCtrl', function () {
  var $scope, createController, CategoryService, $controller;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      CategoryService = $injector.get('CategoryService');

      createController = function () {
        return $controller('AddCategoryCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('test addcategory.js', function () {
    it('category should be add correct', function () {
      spyOn(CategoryService, 'addCategory');
      createController();
      $scope.add({id: '5', name: '5'});
      expect(CategoryService.addCategory).toHaveBeenCalledWith({id: '5', name: '5'});
    });

    it('wrong category should not be add', function () {
      createController();
      $scope.add({id: '5'});
      expect($scope.tip).toEqual('请完整填写信息');
    });

    it('null  should not be add', function () {
      createController();
      $scope.add();
      expect($scope.tip).toEqual('请完整填写信息');
    });
  });
});
