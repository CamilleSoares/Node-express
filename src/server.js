const express = require('express')
const server = express()
const port = 3000

server.get('/device', (req, res) => {
    res.send('Hello world')
})
server.post('/device', function (req, res) {
    res.send('Got a POST request');
  })
  

server.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})