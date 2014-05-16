// public/js/services/NerdService.js
angular.module('mainService', []).factory('main', ['$http', function($http) {

	return {
		// call to get all nerds
		get : function() {
			//return $http.get('/api/nerds');
			return $http.get('/users9/');
		},

		// call to POST and create a new nerd
		create : function(nerdData) {
			return $http.post('/api/nerds', nerdData);
		},

		// call to DELETE a nerd
		delete : function(id) {
			return $http.delete('/api/nerds/' + id);
		}
	}		

}]);

angular.module('aboutService', []).factory('about', ['$http', function($http) {

	return {
		// call to get all nerds
		get : function() {
			//return $http.get('/api/nerds');
			return $http.get('/users9/about');
		},

		// call to POST and create a new nerd
		create : function(nerdData) {
			return $http.post('/api/nerds', nerdData);
		},

		// call to DELETE a nerd
		delete : function(id) {
			return $http.delete('/api/nerds/' + id);
		}
	}		

}]);

angular.module('contactService', []).factory('contact', ['$http', function($http) {

	return {
		// call to get all nerds
		get : function() {
			//return $http.get('/api/nerds');
			return $http.get('/users9/contact');
		},

		// call to POST and create a new nerd
		create : function(nerdData) {
			return $http.post('/api/nerds', nerdData);
		},

		// call to DELETE a nerd
		delete : function(id) {
			return $http.delete('/api/nerds/' + id);
		}
	}		

}]);
