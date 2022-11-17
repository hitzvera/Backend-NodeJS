const express = require('express')
const app = express()

const messageController = require('./controllers/messages.controller')
const friendController = require('./controllers/friends.controller')

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`server running at ${PORT}`)
})
app.use((req,res,next) => {
    const start = Date.now()
    next()
    const delta = Date.now() - start
    console.log(`${req.method} ${req.url} ${delta}ms`)
})
app.use(express.json())

const friendsRouter = express.Router()
const messageRouter = express.Router()

friendsRouter.post('/', friendController.postFriend)
friendsRouter.get('/', friendController.getFriends)
friendsRouter.get('/:friendId', friendController.getFriend)
app.use('/friends', friendsRouter)

messageRouter.get('/', messageController.getMessages)
messageRouter.post('/', messageController.postMessage)
app.use('/messages', messageRouter)