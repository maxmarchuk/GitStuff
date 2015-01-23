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
      gitService.getUser($scope.username).then(function(data){
        $scope.user = data;
        console.log(data);
        $scope.loaded = true;

        gitService.getRepos($scope.user.login).then(function(repodata){
          $scope.repos = repodata;
          console.log(repodata);
        },
        function(error){
          console.log(error);
          $scope.error = error;
        });
      },
      function(error) {
        console.log(error);
        $scope.error = error;
      });

    };
  });


