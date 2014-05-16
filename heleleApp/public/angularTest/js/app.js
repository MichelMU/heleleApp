'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/users7/view1', {
      templateUrl: 'users7/partials/partial1',
      controller: 'MyCtrl1'
    }).
    when('/users7/view2', {
      templateUrl: 'users7/partials/partial2',
      controller: 'MyCtrl2'
    }).
    otherwise({
      redirectTo: '/users7/view1'
    });

  $locationProvider.html5Mode(true);
});
