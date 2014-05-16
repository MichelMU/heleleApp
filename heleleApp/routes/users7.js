var express = require('express');
var router = express.Router();

//var businessModel = require('./business/businessModel');

/* GET home page. */
// router.get('/', function(req, res) {
//   //res.render('index.jade', { title: 'Express' });

//    res.json({user7:'user7 test...'});
// });

router.get('/',  function(req, res){
  res.render('index3');
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


module.exports = router;