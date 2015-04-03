'use strict';

/**
 * @ngdoc function
 * @name gitStuffApp.controller:FollowerCtrl
 * @description
 * # FollowerCtrl
 * Controller of the gitStuffApp
 */

'use strict';

angular.module('gitStuffApp')
  .controller('FollowCtrl', function ($scope, gitService, $routeParams) {
    $scope.username = $routeParams.username;
  gitService.getFollowers($scope.username).then(function(data){
      $scope.followers = data;
      console.log("Followers of : " + $scope.username);  // Making sure I'm not confused...
      $scope.loaded = true;
    },
    function(error) {
      $scope.error = error;
    });

});


