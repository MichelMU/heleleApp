var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/chat', function(err){
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log('Connected to mongodb!');
// 	}
// });

var angularDB=mongoose.createConnection('mongodb://localhost:27017/angularDB');

var personSchema = mongoose.Schema({
	age: Number,
	name: String,
	sex: Boolean
});

var Peoples = angularDB.model('peoples', personSchema);

exports.getPersons = function(limit, persons){
	var query = Peoples.find({});

	query.sort('-age').limit(limit).exec(function(err, docs){
		persons(err, docs);
	});
}

// exports.saveMsg = function(data, cb){
// 	var newMsg = new Chat({msg: data.msg, nick: data.nick});
// 	newMsg.save(function(err){
// 		cb(err);
// 	});
// };