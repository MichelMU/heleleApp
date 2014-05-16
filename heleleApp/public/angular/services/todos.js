angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', function($http) {
		return {
			get : function() {
				return $http.get('/users4/todos');
			},
			create : function(todoData) {
				return $http.post('/users4/todos', todoData);
			},
			delete : function(id) {
				return $http.delete('/users4/todos/' + id);
			}
		}
	});