const EvenEmitter = require('events')
const celebrity = new EvenEmitter()

// subcribe to observer 1
celebrity.on('race', (results) => {
    if (results === 'win') {
        console.log("congratulations you are the best!");
    } else {
        console.log("Boo I could do better")
    }
    
})
process.on('exit', (code) => {
    console.log('Process exitevent with code: ', code)
})

celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');