'use strict';
angular.module('letusgoApp')
  .controller('CartCtrl', function ($scope, cartService) {

    $scope.$emit('cartHighLight');
    updatePage();

    $scope.addOneToCart = function (id) {
      cartService.updateGoodsNumberById(id, 1);
      updateCartNumber();
      updatePage();
    };

    $scope.minusOneToCart = function (id) {
      cartService.updateGoodsNumberById(id, -1);
      updateCartNumber();
      updatePage();
    };

    function updatePage() {
      cartService.getCategory(function (data, total) {
        var categories = _.groupBy(data, function (custom) {
          return custom.goods.category;
        });
        $scope.categories = categories;
        $scope.total = total;
      });
    }

    function updateCartNumber() {
      $scope.$emit('updateCartNumber');
    }
  });
