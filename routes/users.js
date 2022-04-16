var express = require('express');
var router = express.Router();
<<<<<<< HEAD
<<<<<<< HEAD
var controlador = require('../controllers/usersController');

router.get('/login', controlador.login);
router.get('/profile', controlador.profile);
router.get('/profile-edit', controlador.profileEdit);
router.get('/register', controlador.register);


module.exports = router;
=======
=======
>>>>>>> parent of ea75869 (OrdenPaki)
var controlador= require('../controllers/usersController');

/* GET users listing. */
router.get('/login', controlador.login);
router.get('/profile', controlador.profile );
router.get('/profile-edit', controlador.profileEdit);
router.get('/register', controlador.register);

module.exports = router;
<<<<<<< HEAD
>>>>>>> parent of ea75869 (OrdenPaki)
=======
>>>>>>> parent of ea75869 (OrdenPaki)
