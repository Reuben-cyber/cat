var express = require('express');
var router = express.Router();
var db=require('../connection');
/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('home');
  });
module.exports = router;
