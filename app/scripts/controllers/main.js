'use strict';

/**
 * @ngdoc function
 * @name gitStuffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gitStuffApp
 */
angular.module('gitStuffApp')
  .controller('MainCtrl', function ($scope, gitService) {

    $scope.getGitInfo = function() {
      //console.log(gitService.getUser($scope.username));
      $scope.user = gitService.getUser($scope.username);
      $scope.loaded = true;
    }
  });


