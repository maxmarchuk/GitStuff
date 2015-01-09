'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:user
 * @description
 * # user
 */
angular.module('appApp')
  .directive('user', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the user directive');
      }
    };
  });
