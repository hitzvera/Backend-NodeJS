const express = require('express')
const friendsRouter = express.Router()
const friendController = require('../controllers/friends.controller')

friendsRouter.post('/', friendController.postFriend)
friendsRouter.get('/', friendController.getFriends)
friendsRouter.get('/:friendId', friendController.getFriend)


module.exports = friendsRouter