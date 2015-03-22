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

    };
  })
  .directive('searchBar', function() {
    return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'views/search-bar.html'
    };
  });


