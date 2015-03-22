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
      template: '<div class="row"><div class="col-md-10"><form class="form-horizontal"><input type="username" ng-model="username" placeholder="Github user name" ng-keyup="$event.keyCode == 13 && getGitInfo()" class="form-control"></form></div><div class="col-md-2"><button ng-click="" class="btn btn-default">Search</button></div></div>'
    };
  });


