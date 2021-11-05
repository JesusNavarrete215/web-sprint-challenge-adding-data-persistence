// build your `/api/tasks` router here
const express = require('express')
const task = require('./model')

const router = express.Router()

router.get('/tasks', (req, res, next)=> {
    task.getTask()
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(next)
})

router.post('/tasks', (req, res, next)=> {
    task.insertTask(req.body)
    .then(tasks => {
        res.status(201).json(tasks)
    })
    .catch(next)
})


module.exports = router;