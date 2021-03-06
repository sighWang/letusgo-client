'use strict';
angular.module('letusgoApp')
  .controller('IndexCtrl', function ($scope, CartService) {
    updateCartNumberr();
    setActive('', '');

    $scope.$on('updateCartNumber', function () {
      updateCartNumberr();
    });

    $scope.$on('welcomeHighLight', function () {
      setActive('', '');
    });

    $scope.$on('cartHighLight', function () {
      setActive('active', '');
    });

    $scope.$on('listHighLight', function () {
      setActive('', 'active');
    });

    $scope.$on('payHighLight', function () {
      setActive('', '');
    });

    function setActive(cartActive, listActive) {
      $scope.cartActive = cartActive;
      $scope.listActive = listActive;
    }

    function updateCartNumberr() {
      CartService.getCartNumber(function (data) {
        $scope.cartNumber = data;
      });
    }

  });
