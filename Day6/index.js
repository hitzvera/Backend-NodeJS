const http = require('http')
const PORT = 3000


const server = http.createServer((req, res) => {
    // res.writeHead(200, {
    //     'Content-Type': 'application/json'
    // })

    
    if(req.url === '/myself'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({
            name: 'mujahid',
            age: 12, 
            title: 'nothing'
        }))
    } else if(req.url === '/friends'){
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