'use strict';
angular.module('letusgoApp')
  .controller('PayCtrl', function ($scope, cartService) {
    $scope.$emit('payHighLight');

    $scope.customGoodsList = cartService.getCustomGoodsList(function (data) {
      $scope.customGoodsList = data;
    });
    $scope.total = cartService.getTotal(function (data) {
      $scope.total = data;
    });
  });
