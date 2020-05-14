const port = 3003
//fara o parse no corpo da requisição entregando um objeto pronto
const bodyParser = require('body-parser')
//require do node
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

//toda requisição que chegar user o bodyparser quando o formato for urlencoded
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server