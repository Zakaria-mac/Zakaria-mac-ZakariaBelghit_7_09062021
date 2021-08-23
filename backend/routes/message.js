const express = require('express')
const router = express.Router();

const messageCtrl = require ('../controllers/message')
const auth = require ('../middleware/auth')
const multer = require ('../middleware/multer-config')

router.post('/', auth, multer, messageCtrl.createMessage)

router.post('/:id/like', auth, messageCtrl.likeMessage);

router.post('/:id/dislike', auth, messageCtrl.dislikeMessage);
  
router.put('/:id', auth, multer, messageCtrl.modifyMessage);
  
router.delete('/:id', auth, messageCtrl.deleteMessage);
  
router.get('/', auth, messageCtrl.getAllMessages);


module.exports = router;