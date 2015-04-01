'use strict';

/**
 * @ngdoc overview
 * @name gitStuffApp
 * @description
 * # gitStuffApp
 *
 * Main module of the application.
 */
angular
  .module('gitStuffApp', ['ngRoute'])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/followers', {
        templateUrl: 'views/followers.html',
        controller: 'FollowCtrl'
      })
     .otherwise({
        redirectTo: '/'
      });

  });
