'use strict';

describe('Controller: addCatagaryCtrl', function () {
  var $scope, createController, catagaryService, $controller;

  beforeEach(function () {
    module('yeomanLetusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      catagaryService = $injector.get('catagaryService');

      createController = function () {
        return $controller('AddCatagaryCtrl', {
          $scope: $scope
        });
      };
    });
  });

  describe('addcatagary.js', function () {
    it('catagary shoude be add', function () {
      spyOn(catagaryService, 'addCatagary');
      createController();
      $scope.add({id: '5', name: '5'});
      expect(catagaryService.addCatagary).toHaveBeenCalledWith({id: '5', name: '5'});
    });
  });
});
