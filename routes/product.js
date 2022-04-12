var express = require('express');
var router = express.Router();
var controlador = require('../controllers/profile');

router.get('/', controlador.product);
router.get('/edit', controlador.add);

module.exports = router;