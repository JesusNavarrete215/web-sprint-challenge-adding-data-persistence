// build your `/api/resources` router here
const express = require('express')
const resource = require('./model')

const router = express.Router()


router.get('/resources', (req, res, next)=> {
    resource.getResources()
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(next)
})

router.post('/resources', (req, res, next)=> {
    resource.insertResources(req.body)
    .then(resources => {
        res.status(201).json(resources)
    })
    .catch(next)
})





module.exports = router;