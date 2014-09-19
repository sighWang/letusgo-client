'use strict';
angular.module('letusgoApp')
  .service('RedisHttpService', function RedisHttpService($http) {
    this.getItemsByHttp = function (callback){
      $http({method: 'GET', url: '/api/items'}).success(function (data) {
        callback(data);
      });
      $http({method: 'GET', url: '/api/items'}).error(function () {
        console.log('Request failed');
      });
    };
  });
