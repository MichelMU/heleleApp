var mongoose = require('mongoose');

var chatDB=mongoose.createConnection('mongodb://localhost:27017/crudDB2');

var chatSchema = mongoose.Schema({
	user: String,
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
	var newMsg = new Chat({msg: data.msg, user: data.user});
	newMsg.save(function(err){
		cb(err);
	});
};


