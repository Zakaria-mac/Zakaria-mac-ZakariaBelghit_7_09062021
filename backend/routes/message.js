const express = require('express')
const router = express.Router();

const messageCtrl = require ('../controllers/message')
const auth = require ('../middleware/auth')

router.post('/', auth, messageCtrl.createMessage)
  
router.put('/:id', auth, messageCtrl.modifyMessage);
  
router.delete('/:id', auth, messageCtrl.deleteMessage);
  
router.get('/', auth, messageCtrl.getAllMessages);


module.exports = router;