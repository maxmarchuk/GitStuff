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
      return Math.ceil($scope.repos.length / $scope.pageSize);
    };

  })
  .filter('pagination', function()
  {
    return function(input, start)
    {
      start = +start;
      return input.slice(start);
    };
  });
