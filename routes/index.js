var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/search-results', function(req, res, next) {
  res.render('search-results', { title: 'Express' });
});
module.exports = router;
