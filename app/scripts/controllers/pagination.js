'use strict';

/**
 * @ngdoc function
 * @name gitStuffApp.controller:paginationCtrl
 * @description
 * Controller of the gitStuffApp
 */
angular.module('gitStuffApp')
  .controller('PaginationCtrl', function ($scope) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };
  });

