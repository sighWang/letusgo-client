'use strict';
angular.module('letusgoApp')
  .controller('PayCtrl', function ($scope, CartService) {
    $scope.$emit('payHighLight');
    CartService.getCategory(function (data, total) {
      $scope.customGoodsList = data;
      $scope.total = total;
    });
  });
