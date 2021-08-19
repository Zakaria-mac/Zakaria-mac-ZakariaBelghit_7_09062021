const express = require('express')
const router = express.Router();

const messageCtrl = require ('../controllers/message')

router.post('/', messageCtrl.createMessage)
  
router.put('/:id', messageCtrl.modifyMessage);
  
router.delete('/:id', messageCtrl.deleteMessage);
  
router.get('/', messageCtrl.getAllMessages);


module.exports = router;