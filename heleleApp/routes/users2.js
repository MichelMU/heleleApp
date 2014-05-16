var express = require('express');
var router = express.Router();

// var Db = require('mongodb').Db;
// var MongoClient = require('mongodb').MongoClient;
// var Server = require('mongodb').Server;
// var BSON = require('mongodb').pure().BSON;

//var mongoclient = new MongoClient(new Server('localhost',27017,{'native_parser':true}));
// var mongoclient = new MongoClient(new Server('localhost',27017,
// 	{'native_parser':true,'poolSize':8,'maxPoolSize':10}));

var mongo = require('mongodb');
var Server = mongo.Server;
var Db = mongo.Db;
var BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});

var db = new Db('persondb', server, {safe: true});

db.open(function(err, db) {
	if(!err) {
		console.log("Connected to 'persondb' database");
			
		db.collection('peoples', {safe:true}, function(err, collection) {
			
		if (err) {
			console.log("The 'persondb' collection doesn't exist. Creating it with sample data...");
			//populateDB();
		}
	});

	}
});

router.get('/', function(req, res) {
	db.collection('peoples', function(err, collection) {
		collection.find().toArray(function(err, items) {
		res.json(items);
	});

	});
	
});

router.post('/insert', function(req, res) {
	//var bd=req.body;
	db.collection('peoples', function(err, collection) {
		collection.insert({age:9999,name:'aaaaa',sex:false},{safe:true},function(err,result){
			if(err) {
				res.json(err);
			} else {
				console.log('sucess: ' + JSON.stringify(result[0]));
				res.json(result[0]);
			}

		});

	});
	
});

router.put('/update', function(req, res) {
	//var bd=req.body;
	db.collection('peoples', function(err, collection) {
		//collection.update({'_id':new BSON.ObjectID},{safe:true},function(err,result){
		collection.update({age:9999},{age:7777,name:'7777name',sex:true},{safe:true},function(err,result){
			if(err) {
				res.json(err);
			} else {
				console.log('sucess: ' + JSON.stringify(result[0]));
				res.json(result[0]);
			}

		});

	});
	
});

router.delete('/delete', function(req, res) {
	//var bd=req.body;
	db.collection('peoples', function(err, collection) {
		//collection.update({'_id':new BSON.ObjectID},{safe:true},function(err,result){
		collection.remove({age:7777},{safe:true},function(err,result){
			if(err) {
				res.json(err);
			} else {
				console.log('sucess: ' + JSON.stringify(result[0]));
				res.json(result[0]);
			}

		});

	});
	
});



module.exports = router;