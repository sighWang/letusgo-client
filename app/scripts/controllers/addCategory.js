'use strict';
angular.module('letusgoApp')
  .controller('AddCategoryCtrl', function ($scope, CategoryService) {
    $scope.add = function (category) {
      CategoryService.addCategory(category);
    };
  });
