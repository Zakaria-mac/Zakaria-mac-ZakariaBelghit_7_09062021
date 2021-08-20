const express = require ('express');
const router = express.Router();

const userCtrl = require('../controllers/user')

router.post('/signup', userCtrl.signup);

router.post('/login', userCtrl.login);

router.post('/profile', userCtrl.createProfile);

router.put('/profile', userCtrl.modifyProfile);

module.exports = router;