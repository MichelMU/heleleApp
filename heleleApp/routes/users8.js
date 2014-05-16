var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var peopledb= require('./models/peopledb');


router.get('/', function(req, res) {
	//res.json(peopledb.getPerson());
	//peopledb.getPersons2(res);
	
	// peopledb.getPersons(5, function(err, persons){
	//    		 res.json(persons);
 //  	});

	res.sendfile('./public/angularTest2/index.html');
	
});

mongoose.connection.close();

module.exports = router;