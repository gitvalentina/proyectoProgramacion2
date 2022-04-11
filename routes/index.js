var express = require('express');
var router = express.Router();
var controlador = require('../controllers/indexController');

/* GET home page. */
router.get('/', controlador.index);
router.get('/search-results', controlador.search);
module.exports = router;
