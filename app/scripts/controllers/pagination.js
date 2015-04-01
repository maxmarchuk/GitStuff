'use strict';

/**
 * @ngdoc function
 * @name gitStuffApp.controller:paginationCtrl
 * @description
 * Controller of the gitStuffApp
 */
angular.module('gitStuffApp')
  .controller('PaginationCtrl', function ($scope) {

    $scope.curPage = 0;
    $scope.pageSize = 5;

    $scope.numberOfPages = function()
    {
      if($scope.repos != null) {
        return Math.ceil($scope.repos.length / $scope.pageSize);
      } else {
        return 0;
      }
    };

  })
  .filter('pagination', function()
  {
    return function(input, start)
    {
      if(input != null) {
        start = +start;
        return input.slice(start);
      } else {
        return 0;
      }
    };
  });
