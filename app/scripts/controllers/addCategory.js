'use strict';
angular.module('letusgoApp')
  .controller('AddCategoryCtrl', function ($scope, CategoryService, $location) {
    $scope.add = function (category) {
      if(category){
        $('#myModal').modal({});
      }
      else if(category.id || category.name ){
        $('#myModal').modal({});
      }
      else{
        CategoryService.addCategory(category);
        $location.path('/api/categories');
      }
    };
  });
