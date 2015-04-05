'use strict';

/**
 * @ngdoc function
 * @name gitStuffApp.controller:RepoCtrl
 * @description
 * # RepoCtrl
 * Controller of the gitStuffApp
 */

'use strict';

angular.module('gitStuffApp')
  .controller('RepoCtrl', function ($scope, gitService, $routeParams) {
    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame;

    gitService.getRepo($scope.username, $scope.reponame).then(function(data){
      $scope.repo = data;
      $scope.loaded = true;
    },
    function(error) {
      $scope.error = error;
    });
  });



