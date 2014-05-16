// 'use strict';

// // Declare app level module which depends on filters, and services

// angular.module('myApp', [
//   'myApp.controllers',
//   'myApp.filters',
//   'myApp.services',
//   'myApp.directives'
// ]).
// config(function ($routeProvider, $locationProvider) {
//   $routeProvider.
//     when('/users7/view1', {
//       templateUrl: 'users7/partials/partial1',
//       controller: 'MyCtrl1'
//     }).
//     when('/users7/view2', {
//       templateUrl: 'users7/partials/partial2',
//       controller: 'MyCtrl2'
//     }).
//     otherwise({
//       redirectTo: '/users7/view1'
//     });

//   $locationProvider.html5Mode(true);
// });


// angular.module('app',['ui.router'])
// .config(['$urlRouterProvider','$stateProvider',
// 	function($urlRouterProvider,$stateProvider){
// 	  	$urlRouterProvider.otherwise('/users8/home');

// 	  	$stateProvider.state('home',{
// 	  		url:'/users8/home',
// 	  		template:' home'
// 	  	})
//   }])

var routerApp = 
angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    
    $urlRouterProvider.otherwise('users8/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'angularTest2/templates/home.html'
            //template:'home'
        })
        
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'angularTest2/templates/home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        
        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'angularTest2/templates/about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: 'angularTest2/templates/table-data.html',
                    controller: 'scotchController'
                }
            }
            
        });

         //$locationProvider.html5Mode(true);
        
});

routerApp.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});
