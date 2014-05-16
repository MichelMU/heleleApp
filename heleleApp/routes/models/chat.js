var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/chat', function(err){
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log('Connected to mongodb!');
// 	}
// });

var chatDB=mongoose.createConnection('mongodb://localhost:27017/chatDB');

var chatSchema = mongoose.Schema({
	nick: String,
	msg: String,
	created: {type: Date, default: Date.now}
});

var Chat = chatDB.model('Messages', chatSchema);

exports.getOldMsgs = function(limit, cb){
	var query = Chat.find({});
	query.sort('-created').limit(limit).exec(function(err, docs){
		cb(err, docs);
	});
}

exports.saveMsg = function(data, cb){
	var newMsg = new Chat({msg: data.msg, nick: data.nick});
	newMsg.save(function(err){
		cb(err);
	});
};