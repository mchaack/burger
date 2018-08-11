// Needs to Reference Express and express.router

var express = require('express');
var router = express.router();

// Set Up Base Route

router.get('/', function(req, res){
    res.render('index');
})

module.exports = router;