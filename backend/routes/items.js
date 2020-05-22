const express = require('express');
const router = express.Router();
const Item = require('../models/itemsSchema');
const jobDataToDb = require('../helpers/jobData')

const jobIds = [0, 1, 2, 8, 4, 16]

jobIds.forEach(jobId => {
    jobDataToDb(jobId)
})


router.get('/items/:isCash', function (req, res, next) {
    Item.find({isCash: req.params.isCash})
        .then((item) => {
            res.send(item)
        })

        .catch(next)
})

router.get('/items/:requiredJobs/:isCash', function (req, res, next) {
    Item.find({requiredJobs: req.params.requiredJobs, isCash: req.params.isCash})
        .then((item) => {
            res.send(item)
        })
        .catch(next)
})

router.get('/items/:id', function (req, res, next) {
    Item.find({ _id: req.params.id })
        .then((item) => {
            res.send(item)
        })

        .catch(next)
})


module.exports = router