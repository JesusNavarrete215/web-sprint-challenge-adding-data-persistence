
const express = require('express')

const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

const server = express()
server.use(express.json())

server.use('/api', projectRouter)
server.use('/api', resourceRouter)
server.use('/api', taskRouter)

server.use((err, req, res, next) =>{
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

module.exports = server;