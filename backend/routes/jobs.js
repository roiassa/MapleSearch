const express = require('express');
const router = express.Router();
const Job = require('../models/jobsSchema')


router.get('/jobs', function(req, res){
    Job.find({}).then(function(jobs){
        res.send(jobs)
    })
})


router.post('/jobs', function(req, res) {
    Job.create({
        path: req.body.path,
        title: req.body.title,
        image: req.body.image,
        overview: req.body.overview
    }).then(function(job){
        res.send(job)
    })
})


module.exports = router;