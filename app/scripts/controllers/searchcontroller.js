'use strict';

/**
 * @ngdoc function
 * @name gitStuffApp.controller:SearchcontrollerCtrl
 * @description
 * # SearchcontrollerCtrl
 * Controller of the gitStuffApp
 */
angular.module('gitStuffApp')
  .controller('SearchcontrollerCtrl', function ($scope, $location) {
      $scope.notifyMain = function() {
      $scope.$broadcast('search', $scope.username);
      $scope.username = null;
    }
  });
