'use strict';
angular.module('letusgoApp')
  .controller('CartCtrl', function ($scope, CartService) {

    $scope.$emit('cartHighLight');
    updatePage();

    $scope.addOneToCart = function (id) {
      CartService.updateGoodsNumberById(id, 1);
      updateCartNumber();
      updatePage();
    };

    $scope.minusOneToCart = function (id) {
      CartService.updateGoodsNumberById(id, -1);
      updateCartNumber();
      updatePage();
    };

    function updatePage() {
      CartService.getCategory(function (data, total) {
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
