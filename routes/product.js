var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var controlador = require('../controllers/productController');
=======
var controlador=require('../controllers/productController');
>>>>>>> parent of ea75869 (OrdenPaki)

router.get('/', controlador.product);
router.get('/add', controlador.add);

module.exports = router;