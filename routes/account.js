const express = require('express');
const router = express.Router();
const {signUpController, loginController,reqestRefreshToken} = require('../controllers/account.controller');
const {isEmail ,checkLogin,checkAuth} = require('../middleware/auth');

router.post('/signup', signUpController)
router.post('/login', loginController)
router.post("/refresh", reqestRefreshToken)

module.exports = router