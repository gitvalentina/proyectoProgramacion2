var express = require('express');
var router = express.Router();
var controlador=require('../controllers/productController');

router.get('/', controlador.product);
router.get('/add', controlador.add);

module.exports = router;