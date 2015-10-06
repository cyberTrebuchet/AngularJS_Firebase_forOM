'use strict';

/**
 * @ngdoc overview
 * @name angularFirebaseForOmApp
 * @description
 * # angularFirebaseForOmApp
 *
 * Main module of the application.
 */

/* global app:true */
/* exported app */

var app = angular.module('forOM', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'firebase'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
