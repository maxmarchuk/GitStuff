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
      .when('/followers/:username', {
        templateUrl: 'views/followers.html',
        controller: 'FollowCtrl'
      })
      .when('/:username/repo/:reponame', {
        templateUrl: 'views/repo.html',
        controller: 'RepoCtrl'
      })
     .otherwise({
        redirectTo: '/'
      });

  });
