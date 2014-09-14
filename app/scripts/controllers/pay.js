'use strict';
angular.module('letusgoApp')
    .controller('PayCtrl', function ($scope, cartService) {
        $scope.$emit('payHighLight');

        $scope.customGoodsList = cartService.getCustomGoodsList();
        $scope.total = cartService.getTotal();
    });
