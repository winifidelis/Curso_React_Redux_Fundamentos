const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
	//o router sempre será chamado quando eu digitar './api'
    server.use('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/todoService')
	//a linha abaixo eu registro todas as linhas do webservice
    todoService.register(router, '/todos')
}