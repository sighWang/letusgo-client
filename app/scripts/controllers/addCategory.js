'use strict';
angular.module('letusgoApp')
  .controller('AddCategoryCtrl', function ($scope, CategoryService, $location) {
    function showModal() {
      $('#myModal').modal({});
    }
    $scope.add = function (category) {
      if(category === undefined){
        showModal();
      }
      else if(category.id === undefined || category.name === undefined){
        showModal();
      }
      else{
        CategoryService.addCategory(category);
        $location.path('/api/categories');
      }
    };
  });
