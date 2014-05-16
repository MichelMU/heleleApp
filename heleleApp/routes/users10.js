
var express = require('express');
var router = express.Router();



var mongoose = require('mongoose');

var server = require('http').createServer(router).listen(5678); 
var io = require('socket.io').listen(server);

var peopledb= require('./models/peopledb');



/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index.jade', { title: 'Express' });


	// peopledb.getPersons(5, function(err, persons){
	//    		 res.json(persons);
 //  	});





	res.sendfile('./public/socketTest6/index.html');


  
});



io.sockets.on('connection', function (socket) {
  var name = userNames.getGuestName();

  // send the new user their name and a list of users
  socket.emit('init', {
    name: name,
    users: userNames.get()
  });

    socket.emit('send:name', {
        name: 'Bob2'
    });

  socket.emit('getusers',function(res,req){


  })


  socket.on('personSave',function(data){

  	peopledb.savePerson(data,function(err){
  		console.log(err);
  	})

  })

  // notify other clients that a new user has joined
  socket.broadcast.emit('user:join', {
    name: name
  });

  // broadcast a user's message to other users
  socket.on('send:message', function (data) {
    // socket.broadcast.emit('send:message', {
    //   user: name,
    //   text: data.message
    // });

   heleleDb.saveMsg({user:name, msg: data.message}, function(err){
      if(err) throw err;

      //io.sockets.emit('message', {nick: nick, text: msg});
      socket.broadcast.emit('send:message', {
        user: name,
        text: data.message
      });

    });
  });

  // validate a user's name change, and broadcast it on success
  socket.on('change:name', function (data, fn) {
    if (userNames.claim(data.name)) {
      var oldName = name;
      userNames.free(oldName);

      name = data.name;
      
      socket.broadcast.emit('change:name', {
        oldName: oldName,
        newName: name
      });

      fn(true);
    } else {
      fn(false);
    }
  });

  // clean up when a user leaves, and broadcast it to other users
  socket.on('disconnect', function () {
    socket.broadcast.emit('user:left', {
      name: name
    });
    userNames.free(name);
  });

});


mongoose.connection.close();

module.exports = router;