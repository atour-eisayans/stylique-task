const { Router } = require('express');

const userController = require('../controllers/user.controller');

const router = Router();

router.post('/signup', userController.signupUser);

router.post('/signin', userController.signinUser);

module.exports = router;
