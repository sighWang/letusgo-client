'use strict';
angular.module('letusgoApp')
  .controller('PayCtrl', function ($scope, cartService) {
    $scope.$emit('payHighLight');
    cartService.getCategory(function (data, total) {
      $scope.customGoodsList = data;
      $scope.total = total;
    });
  });
