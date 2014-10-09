'use strict';

angular.module('letusgoApp')
  .controller('CategoryManageCtrl', function ($scope, CategoryService) {
    updateCategories();

    $scope.showEdit = function (category) {
      CategoryService.storeCategory(category);
    };

//    $scope.removeItem = function (category) {
//      CategoryService.removeCategory(category, function (removed) {
//        if (removed) {
//          updateCategories();
//        }
//        else {
//          $('#myModal').modal({});
//        }
//      });
//    };

    $scope.removeItem = function (category) {
      CategoryService.ableRemove(category, function (removed) {
        if(removed){
          CategoryService.removeCategory(category);
        }
        else{
          $('#myModal').modal({});
        }
      });
    };

    function updateCategories() {
      CategoryService.getCategories(function (data) {
        $scope.categories = data;
      });
    }
  });
