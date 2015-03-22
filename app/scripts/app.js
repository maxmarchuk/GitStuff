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
  .config(function ($locationProvider, $routeProvider) {

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

    $locationProvider.html5Mode({enabled: true, requireBase: false});

  });
