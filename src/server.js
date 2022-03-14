const express = require('express')
const server = express()
const port = 3000

server.get('/device', (req, res) => {
    res.send('Hello world')
})
server.post('/device', function (req, res) {
    res.send('Got a POST request')
  })
server.put('/device', function (req, res) {
    res.send('Got a PUT request at /user')
  })
server.delete('/device', function (req, res) {
    res.send('Got a DELETE request at /user')
  })
  
server.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})