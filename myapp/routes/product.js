var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('product', { title: 'Express 123' });
});

module.exports = router;
