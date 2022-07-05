const Router = require('express')
const router = new Router
const MessageController  = require('../controller/post.controller')

router.post('/message', MessageController.createMessage)
router.get('/message', MessageController.getMessagesByUser)


module.exports = router

