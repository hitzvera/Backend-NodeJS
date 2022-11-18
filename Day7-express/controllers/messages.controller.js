const model = require('../models/friends.model')
const path = require('path')

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'skimountain.jpg'))
}

function postMessage(req, res) {
    res.send({
        name: req.body.name,
        id: model.length
    })
}

module.exports = {
    getMessages,
    postMessage
}