'use strict';
angular.module('letusgoApp')
    .controller('WelcomeCtrl', function ($scope) {
        $scope.$emit('welcomeHighLight');
    });
