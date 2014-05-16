module.exports.name = function (req, res) {
  res.json({
    name: 'Bob'
  });
};

module.exports.index = function(req, res){
  res.render('index3');
};

module.exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};