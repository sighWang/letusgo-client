//'use strict';
//describe('Controller: categoryManagageCtrl', function () {
//  var $scope, createController, categoryService, $controller;
//
//  beforeEach(function () {
//    module('letusgoApp');
//
//    inject(function ($injector) {
//
//      $scope = $injector.get('$rootScope').$new();
//      $controller = $injector.get('$controller');
//      categoryService = $injector.get('categoryService');
//
//      createController = function () {
//        return $controller('CategoryManageCtrl', {
//          $scope: $scope
//        });
//      };
//    });
//  });
//
//  describe('categoryManageCtrl add remove edit get', function () {
//    it('should can get all category', function () {
//      createController();
//      expect($scope.categories).toEqual(jasmine.any(Object));
//      expect($scope.categories.length).toBeGreaterThan(0);
//    });
//
//    it('edit category', function () {
//      createController();
//      spyOn(categoryService, 'storeCategory');
//      $scope.showEdit({id: '3', name: 'haha'});
//      expect(categoryService.storeCategory).toHaveBeenCalledWith({id: '3', name: 'haha'});
//    });
//
//    it('remove Item', function () {
//      createController();
//      spyOn(categoryService, 'removeCategory');
//      $scope.removeItem({id: '3', name: '4'});
//      expect(categoryService.removeCategory).toHaveBeenCalledWith({id: '3', name: '4'});
//    });
//  });
//});
