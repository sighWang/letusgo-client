'use strict';
angular.module('letusgoApp')
    .controller('IndexCtrl', function ($scope, cartService, localStorageService) {
        initData(localStorageService);

        $scope.cartNumber = cartService.getCartNumber();
        $scope.listActive = '';
        $scope.cartActive = '';

        $scope.$on('updateCartNumber', function () {
            $scope.cartNumber = cartService.getCartNumber();
        });

        $scope.$on('welcomeHighLight', function () {
            $scope.cartActive = '';
            $scope.listActive = '';
        });

        $scope.$on('cartHighLight', function () {
            $scope.listActive = '';
            $scope.cartActive = 'active';
        });

        $scope.$on('listHighLight', function () {
            $scope.cartActive = '';
            $scope.listActive = 'active';
        });

        $scope.$on('payHighLight', function () {
            $scope.cartActive = '';
            $scope.listActive = '';
        });

    });
