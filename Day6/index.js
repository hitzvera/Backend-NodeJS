const http = require('http')
const PORT = 3000

const friends = [
    {
        id: 0,
        name: 'Mujahid Ansori Majid'
    },
    {
        id: 1,
        name: 'Farhan Nurzaman'
    },
    {
        id: 2,
        name: 'Hilmy Apriyadi'
    },
    {
        id: 3,
        name: 'Yude Nurfikri Ikhsan'
    },
]

const server = http.createServer((req, res) => {
    const items = req.url.split('/')

    
    if(req.method === 'POST' && items[1] === 'myself'){

        req.on('data', (data) => {
            const friend = data.toString()
            console.log(`Request: ${friend}`)
            friends.push(JSON.parse(friend))
            
        })
        req.pipe(res)
    } else if(req.method === 'GET' && items[1] === 'myself') {

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        if(items.length === 3){
            const friendIndex = items[2]
            res.end(JSON.stringify(friends[friendIndex]))
        }
        res.end(JSON.stringify(friends))
        
    } else if(items[1] === 'friends'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<body>')
        res.write('<ul>')
        res.write('<li>Farhan nurzaman</li>')
        res.write('<li>hilmy apriadi</li>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')
        res.end()
    } else {
        res.statusCode = 404
        res.end()
    }
    
})

server.listen(PORT, () => {
    console.log(`you are listening on port ${PORT}`)
})