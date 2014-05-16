var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/TodoDb', function(err){
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log('Connected to mongodb!');
// 	}
// });

var todoDB=mongoose.createConnection('mongodb://localhost:27017/TodoDb');

module.exports = todoDB.model('Todo', {
	text : String,
	done : Boolean
});