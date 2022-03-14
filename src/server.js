const express = require('express')
const server = express()
const port = 3000

server.get('/device', (req, res) => {
    res.send('Hello world')
})

server.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})