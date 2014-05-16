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

routerApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider.otherwise('users10/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'socketTest6/templates/home.html'
            //template:'home'
        })
        
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'socketTest6/templates/home-list.html',
            // controller: function($scope) {
            //     $scope.users = [
            //     {age:11,name:'youngil1',sex:true},
            //     {age:22,name:'youngi22',sex:true},
            //     {age:33,name:'youngi33',sex:true},

            //     ];
            // }

            controller:'heleleController'
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
                '': { templateUrl: 'socketTest6/templates/about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: 'socketTest6/templates/table-data.html',
                    controller: 'scotchController'
                }
            }
            
        });

         //$locationProvider.html5Mode(true);
        
});


routerApp.controller('heleleController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.users = [
        {age:11,name:'youngil1',sex:true},
        {age:22,name:'youngi22',sex:true},
        {age:33,name:'youngi33',sex:true}
    ];
    
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
