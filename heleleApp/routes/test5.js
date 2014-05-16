var express = require('express');
var router = express.Router();

var server = require('http').createServer(router).listen(3030); 
var io = require('socket.io').listen(server);

var mongoose = require('mongoose');

var heleleDb = require('./models/crud2');

//var socketBusiness = require('./business/socketBusiness');

/* GET home page. */
// router.get('/', function(req, res) {
//   //res.render('index.jade', { title: 'Express' });

//    res.json({test5:'test5.....'});
// });

// JSON API
// router.get('/name', function (req, res) {
//   res.json({
//   	name: 'Bob'
//   });
// });

// router.get('/', function(req, res){
//   res.render('index2');
// });

// router.get('/:name',function (req, res) {
//   var name = req.params.name;
//   res.render('partials2/' + name);
// });

router.get('/',  function(req, res){
  res.render('index2');
});
router.get('/partials/:name', function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);

});

// JSON API
router.get('/api/name', function (req, res) {
  res.json({
    name: 'Bob'
  });
});




// redirect all others to the index (HTML5 history)
// router.get('*', function(req, res){
//   res.render('index2');
// });

//io.sockets.on('connection', require('./routes/socket'));

io.sockets.on('connection', function (socket) {
  socket.emit('send:name', {
    name: 'Bob'
  });

  setInterval(function () {
    socket.emit('send:time', {
      time: (new Date()).toString()
    });
  }, 1000);

});


mongoose.connection.close();

module.exports = router;
