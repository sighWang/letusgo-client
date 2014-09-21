'use strict';

angular
  .module('letusgoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl'
      })
      .when('/api/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
      .when('/api/items/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl'
      })
      .when('/api/items/pay', {
        templateUrl: 'views/pay.html',
        controller: 'PayCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/api/items/manage', {
        templateUrl: 'views/listManage.html',
        controller: 'ListmanageCtrl'
      })
      .when('/api/items/edit', {
        templateUrl: 'views/listManage/editGoods.html',
        controller: 'EditGoodsCtrl'
      })
      .when('/api/items/add', {
        templateUrl: 'views/listManage/addGoods.html',
        controller: 'AddGoodsCtrl'
      })
      .when('/api/categories', {
        templateUrl: 'views/categoryManage.html',
        controller: 'CategoryManageCtrl'
      })
      .when('/api/categories/edit', {
        templateUrl: 'views/categoryManage/editCategory.html',
        controller: 'EditCategoryCtrl'
      })
      .when('/addCatagary', {
        templateUrl: 'views/categoryManage/addCategory.html',
        controller: 'AddCategoryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
