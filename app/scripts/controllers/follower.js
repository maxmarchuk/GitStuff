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
  .controller('FollowCtrl', function ($scope, gitService) {
    $scope.username = "maxmarchuk";
  gitService.getFollowers($scope.username).then(function(data){
      $scope.followers = data;
      console.log($scope.followers);
      $scope.loaded = true;

    },
    function(error) {
      $scope.error = error;
    });

});


