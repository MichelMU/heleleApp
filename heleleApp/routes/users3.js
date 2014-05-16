var express = require('express');
var router = express.Router();

var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/persondb", {native_parser:true});

db.bind('peoples');

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index.jade', { title: 'Express' });

   //res.render('home');
   //res.json({mongo:'mongoskin native driver....'})
   db.peoples.find().toArray(function(err, items) {
   		res.json(items);
        //db.close();
	});
});

router.post('/insert',function(err,person){
	db.collection('peoples').insert({name: 'heleleName', sex:true,age:7777},
		function(err, result) {
    
    		if (err) throw err;
    		//if (result) res.json(person);
		});
});

router.put('/update',function(err,person){

	db.collection('peoples').update({age:7777}, {$set:{age:2000}}, function(err, result) {
    	if (!err) console.log('age updated!');

	});

})

router.delete('/delete',function(err,person){
	db.collection('peoples').remove({age:2000}, function(err, result) {
    if (!err) console.log('age:2000 deleted!');
	});

})

module.exports = router;