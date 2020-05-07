const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
//adicionando as permissões
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
//permito que a requisição possa vir de uma origem diferente
server.use(allowCors)

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server

//para rodar o servidor ir ao terminar e executar
//npm run dev
//dev está configurado no arquivo package.json