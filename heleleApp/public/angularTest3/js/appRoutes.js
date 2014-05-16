angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/users9/', {
			templateUrl: 'angularTest3/views/home.html',
			controller: 'MainController'
		})

		.when('/users9/nerds', {
			templateUrl: 'angularTest3/views/nerd.html',
			controller: 'NerdController'
		})

		.when('/users9/geeks', {
			templateUrl: 'angularTest3/views/geek.html',
			controller: 'GeekController'	
		})

		.when('/users9/hale', {
			templateUrl: 'angularTest3/views/hale.html',
			controller: 'haleController'	
		})

		.when('/users9/helele', {
			templateUrl: 'angularTest3/views/helele.html',
			controller: 'heleleController'	
		})

		.when('/users9/hevele', {
			templateUrl: 'angularTest3/views/hevele.html',
			controller: 'heveleController'	
		})

		.when('/users9/hevole', {
			templateUrl: 'angularTest3/views/hevole.html',
			controller: 'hevoleController'	
		});



	$locationProvider.html5Mode(true);

}]);