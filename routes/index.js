var express = require('express');
var router = express.Router();
var controlador = require('../controllers/indexController');
<<<<<<< HEAD
<<<<<<< HEAD

router.get('/', controlador.index);
router.get('/search-results', controlador.search);

module.exports=router;



=======
>>>>>>> parent of ea75869 (OrdenPaki)

=======

>>>>>>> parent of ea75869 (OrdenPaki)
/* GET home page. */
router.get('/', controlador.index);
router.get('/search-results', controlador.search);
module.exports = router;
