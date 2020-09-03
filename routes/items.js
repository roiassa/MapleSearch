const express = require('express');
const router = express.Router();
const Item = require('../models/itemsSchema');
const getJobData = require('../helpers/jobData')

// getJobData()
router.get('/items/:isCash/page=:page', async function (req, res) {

    const page = +req.params.page
    const limit = 10

    try {
        const items = await Item.find({ isCash: req.params.isCash }).limit(limit).skip(page * limit)
        const itemNumberCashFalse = await Item.count({ isCash: false })
        const itemNumberCashTrue = await Item.count({ isCash: true })
        // const findItems = await Item.find({ isCash: true }).sort("-_id").limit(10)
        res.send({ items, itemNumberCashFalse, itemNumberCashTrue })
    }

    catch (e) {
        res.send({ message: e.message })
    }
})

router.get('/items/:requiredJobs/:isCash', function (req, res, next) {
    Item.find({ requiredJobs: req.params.requiredJobs, isCash: req.params.isCash })
        .then((items) => {
            res.send(items)
        })
        .catch(next)
})

// router.get('/items/:id', function (req, res, next) {
//     Item.find({ _id: req.params.id })
//         .then((item) => {
//             res.send(item)
//         })

//         .catch(next)
// })


module.exports = router