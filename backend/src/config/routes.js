const express = require('express')

module.exports = function(server){

    //API Routes
    const router = express.Router()
    server.use('/api', router)


    //TODO rountes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}