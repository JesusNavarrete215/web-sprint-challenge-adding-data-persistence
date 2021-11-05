// build your `/api/projects` router here
const express = require('express')
const project = require('./model')

const router = express.Router()

router.get('/projects', (req, res, next)=> {
    project.getProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(next)
})

router.post('/projects', (req, res, next)=> {
    project.insertProject(req.body)
    .then(projects => {
        res.status(201).json(projects)
    })
    .catch(next)
})





module.exports = router;