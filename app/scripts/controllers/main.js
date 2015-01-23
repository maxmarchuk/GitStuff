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
      var success;
      gitService.getUser($scope.username).then(function(data){
        $scope.user = data;
        console.log(data);
        $scope.loaded = true;
        success = true;
      },
      function(error) {
        console.log(error);
        $scope.error = error;
        success = false;
      });

      if(success)
      {
        gitService.getRepos($scope.user.login).then(function(data){
          $scope.repos = data;
          console.log(data);
        },
        function(message){
          console.log(error);
          $scope.error = error;
        })
      }
    }
  });


