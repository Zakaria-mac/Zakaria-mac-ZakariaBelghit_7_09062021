const express = require ('express');
const router = express.Router();

const userCtrl = require('../controllers/user')
const auth = require('../middleware/auth')

router.post('/signup', userCtrl.signup);

router.post('/login', userCtrl.login);

router.put('/profile', auth, userCtrl.modifyProfile);

router.get('/profile', auth, userCtrl.getProfile)

module.exports = router;