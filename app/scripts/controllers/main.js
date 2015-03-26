'use strict';

/**
 * @ngdoc function
 * @name gitStuffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Main Controller of the gitStuffApp
 */
angular.module('gitStuffApp')
  .controller('MainCtrl', function ($scope, gitService) {

    $scope.$on('search', function(event, username) {
      $scope.loaded = false;
      gitService.getUser(username).then(function(data){
        $scope.user = data;
        $scope.loaded = true;

        gitService.getRepos($scope.user.login).then(function(repodata){
          $scope.repos = repodata;

          $scope.error = null;
        },
        function(error){
          $scope.error = error;
        });
      },
      function(error) {
        $scope.error = error;
      });

    });

  });


