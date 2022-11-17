const model = require('../models/friends.model')

function getFriend(req, res){
    const friendId = +req.params.friendId
    const friend = model[friendId]
    if(friend){
        res.json(friend)
        return
    }
    res.status(404).json({error: true, message: 'friend is not found'})
}

function getFriends(req, res){
    res.json(model)
}

function postFriend(req,res) {
    if(!req.body.name) {
        res.status(400).json({
            error: true,
            message: 'Missing friend name'
        })
        return
    } 
    const newFriend = {
        id: model.length,
        name: req.body.name
    }
    model.push(newFriend)
    res.send(newFriend)
}

module.exports = {
    getFriend,
    getFriends,
    postFriend
}