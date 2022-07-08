import { get } from 'https'

const req = get('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data Chunk: ${chunk}`)
    })
    res.on('end', () => {
        console.log('No more data')
    })
})
