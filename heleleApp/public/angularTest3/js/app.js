 angular.module('sampleApp', ['ngRoute', 'appRoutes', 
    'MainCtrl', 'NerdCtrl', 'NerdService', 
    'GeekCtrl', 'GeekService',

    'haleCtrl', 'haleService',
    'heleleCtrl', 'heleleService',
    'hevoleCtrl', 'hevoleService',
    'heveleCtrl', 'heveleService'

    ]);

 // // create the module and name it scotchApp
 //    var scotchApp = angular.module('scotchApp', ['ngRoute']);

 //    // configure our routes
 //    scotchApp.config(function($routeProvider,$locationProvider) {
 //        $routeProvider

 //            // route for the home page
 //            .when('users9/', {
 //                //templateUrl : 'users9/partials/home.html',
 //                //templateUrl : 'angularTest3/templates/home.html',
 //                templateUrl : 'angularTest3/templates/home.html',
 //                controller  : 'mainController'
 //            })

 //            // route for the about page
 //            .when('users9/about', {
 //                templateUrl : 'angularTest3/templates/about.html',
 //                controller  : 'aboutController'
 //            })

 //            // route for the contact page
 //            .when('users9/contact', {
 //                templateUrl : 'angularTest3/templates/contact.html',
 //                controller  : 'contactController'
 //            })
 //            // .
 //            // otherwise({
 //            //   redirectTo: '/home'
 //            // });

 //              $locationProvider.html5Mode(true);
 //    });



 //    // create the controller and inject Angular's $scope
 //    scotchApp.controller('mainController', function($scope) {
 //        // create a message to display in our view
 //        $scope.message = 'Everyone come and see how good I look!';
 //    });

 //    scotchApp.controller('aboutController', function($scope) {
 //        $scope.message = 'Look! I am an about page.';
 //    });

 //    scotchApp.controller('contactController', function($scope) {
 //        $scope.message = 'Contact us! JK. This is just a demo.';
 //    });

// var routerApp = 
// angular.module('routerApp', ['ui.router']);

// routerApp.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    
//     $urlRouterProvider.otherwise('users8/home');
    
//     $stateProvider
        
//         // HOME STATES AND NESTED VIEWS ========================================
//         .state('home', {
//             url: '/home',
//             templateUrl: 'angularTest2/templates/home.html'
//             //template:'home'
//         })
        
//         // nested list with custom controller
//         .state('home.list', {
//             url: '/list',
//             templateUrl: 'angularTest2/templates/home-list.html',
//             controller: function($scope) {
//                 $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
//             }
//         })
        
//         // nested list with just some random string data
//         .state('home.paragraph', {
//             url: '/paragraph',
//             template: 'I could sure use a drink right now.'
//         })
        
//         // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
//         .state('about', {
//             url: '/about',
//             views: {
//                 '': { templateUrl: 'angularTest2/templates/about.html' },
//                 'columnOne@about': { template: 'Look I am a column!' },
//                 'columnTwo@about': { 
//                     templateUrl: 'angularTest2/templates/table-data.html',
//                     controller: 'scotchController'
//                 }
//             }
            
//         });

//          //$locationProvider.html5Mode(true);
        
// });

// routerApp.controller('scotchController', function($scope) {
    
//     $scope.message = 'test';
   
//     $scope.scotches = [
//         {
//             name: 'Macallan 12',
//             price: 50
//         },
//         {
//             name: 'Chivas Regal Royal Salute',
//             price: 10000
//         },
//         {
//             name: 'Glenfiddich 1937',
//             price: 20000
//         }
//     ];
    
// });
