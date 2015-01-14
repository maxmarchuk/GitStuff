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
  .module('gitStuffApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
     .otherwise({
        redirectTo: '/'
      });
  });
