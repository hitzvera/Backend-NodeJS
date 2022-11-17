function getMessages(req, res) {
    res.send('<ul><li>mujahidansori</li><ul>')
}

function postMessage(req, res) {
    res.send({name: "Mujahid ansori majid", age: 20})
}

module.exports = {
    getMessages,
    postMessage
}