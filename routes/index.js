var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var users = [{name: 'Joseph'}, {name:'Scott'}];

router.get('/usersNotAPI', function(req,res,next){
    res.render('usersNotAPI',{ users: users})
});


router.get('/*', function(req,res,next){
    res.redirect('/');
});

module.exports = router;
