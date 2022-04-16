var express = require('express');
var router = express.Router();
var controlador = require('../controllers/usersController');

router.get('/login', controlador.login);
router.get('/profile', controlador.profile);
router.get('/profile-edit', controlador.profileEdit);
router.get('/register', controlador.register);


module.exports = router;