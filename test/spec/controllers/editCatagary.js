'use strict';

describe('Controller: EditCatagaryCtrl', function () {
  var $scope, createController, catagaryService, $controller;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      catagaryService = $injector.get('catagaryService');

      createController = function () {
        return $controller('EditCatagaryCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('editCatagary.js', function () {
    it('catagary should be get', function () {
      spyOn(catagaryService, 'getStoreCatagary').andReturn({id: '4', name: '5'});
      createController();
      expect($scope.catagary).toEqual(jasmine.any(Object));
    });
    it('catagaryService.editCatagary should be called', function () {
      spyOn(catagaryService, 'editCatagary');
      createController();
      $scope.edit({id: '4', name: '5'});
      expect(catagaryService.editCatagary).toHaveBeenCalledWith({id: '4', name: '5'});
    })
  });
});
