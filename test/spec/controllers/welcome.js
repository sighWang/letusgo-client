'use strict';

describe('controller: welcome index', function () {
  var $scope, creatController, $controller;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');

      creatController = function () {
        return $controller('WelcomeCtrl', {
          $scope: $scope
        });
      }
    });
  });

  it('should be no highLight nav', function () {
    spyOn($scope, '$emit');
    creatController();
    expect($scope.$emit).toHaveBeenCalledWith('welcomeHighLight');
  });
});
