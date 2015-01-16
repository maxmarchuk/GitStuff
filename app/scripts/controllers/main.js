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
      $scope.loaded = false;
      $scope.user = gitService.getUser($scope.username).then(function(data){
        $scope.user = data;
        console.log(data);
            $scope.loaded = true;
      },
      function(error) {
        console.log(error);
        $scope.error = error;
      });
    }
  });


