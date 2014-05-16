var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var server = require('http').createServer(router).listen(9999); 
var io = require('socket.io').listen(server);

var peopledb= require('./models/peopledb');


router.get('/', function(req, res) {
	//res.json(peopledb.getPerson());
	
	//peopledb.getPersons2(res);
	
	peopledb.getPersons(5, function(err, persons){
   		 
   		 //io.socket.emit(persons);

   		 res.json(persons);
  });
	
});

mongoose.connection.close();

module.exports = router;