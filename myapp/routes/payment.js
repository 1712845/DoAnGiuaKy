var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('payment', { title: 'Express 123' });
});

module.exports = router;