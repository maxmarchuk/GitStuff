'use strict';

/**
 * @ngdoc service
 * @name gitStuffApp.gitService
 * @description
 * # gitService
 * Service in the gitStuffApp.
 */
angular.module('gitStuffApp')
  .service('gitService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getUser = function (searchTerm) {
      $http.get('https://api.github.com/users/' + searchTerm).
        success(function (data, status, headers, config) {
          console.log(data);
          return data;
        }).
        error(function (data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          return "";
        });
    }
  });
