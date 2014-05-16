exports.index = function(req, res){
  res.render('index2');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials2/' + name);
};

exports.name = function (req, res) {
  res.json({
  	name: 'Bob'
  });
};

module.exports = function (socket) {
  socket.emit('send:name', {
    name: 'Bob'
  });

  setInterval(function () {
    socket.emit('send:time', {
      time: (new Date()).toString()
    });
  }, 1000);
};