'use strict';

/**
 * @ngdoc directive
 * @name gitStuffApp.directive:searchBar
 * @description
 * # searchBar
 * Search text box and button used for finding GitHub users
 */
angular.module('gitStuffApp')
  .directive('searchBar', function () {
    return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'views/search-bar.html'
    };
  });
