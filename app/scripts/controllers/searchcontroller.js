'use strict';

/**
 * @ngdoc function
 * @name gitStuffApp.controller:SearchcontrollerCtrl
 * @description
 * # SearchcontrollerCtrl
 * Controller of the gitStuffApp
 */
angular.module('gitStuffApp')
  .controller('SearchcontrollerCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getParentUserInfo = function() {
      $scope.parent.getGitInfo()
    }
  });
