'use strict';

/**
 * @ngdoc function
 * @name gitStuffApp.controller:FollowerCtrl
 * @description
 * # FollowerCtrl
 * Controller of the gitStuffApp
 */
'use strict';

/**
 * @ngdoc function
 * @name gitStuffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gitStuffApp
 */
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


