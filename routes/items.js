const express = require('express');
const router = express.Router();
const Item = require('../models/itemsSchema');
const getJobData = require('../helpers/jobData')

let page;
let limit = 10;

router.get('/items/:isCash/page=:page', async function (req, res) {
    page = +req.params.page

    try {
        const items = await Item.find({ isCash: req.params.isCash }).limit(limit).skip(page * limit)
        const itemNumberCashFalse = await Item.countDocuments({ isCash: false })
        const itemNumberCashTrue = await Item.countDocuments({ isCash: true })
        res.send({ items, itemNumberCashFalse, itemNumberCashTrue })
    }
    catch (e) {
        res.send({ message: e.message })
    }
})

router.get('/items/:requiredJobs/:isCash/page=:page', async function (req, res) {
    page = +req.params.page

    try {
        const jobItems = await Item.find({ requiredJobs: req.params.requiredJobs, isCash: req.params.isCash }).limit(limit).skip(page * limit)
        const jobItemNumberCashFalse = await Item.countDocuments({ isCash: false, requiredJobs: req.params.requiredJobs })
        const jobItemNumberCashTrue = await Item.countDocuments({ isCash: true, requiredJobs: req.params.requiredJobs })
        res.send({ jobItems, jobItemNumberCashFalse, jobItemNumberCashTrue })
    }
    catch (e) {
        res.send({ message: e.message })
    }
})


router.get('/items/search/:itemName/:isCash/page=:page', async (req, res) => {
    page = +req.params.page

    try {
        const regex = new RegExp(req.params.itemName, 'i');
        const filteredItems = await Item.find({ name: regex, isCash: req.params.isCash }).limit(limit).skip(page * limit)
        const filteredItemsNumberCashFalse = await Item.countDocuments({ isCash: false, name: regex })
        const filteredItemsNumberCashTrue = await Item.countDocuments({ isCash: true, name: regex })
        res.send({ filteredItems, filteredItemsNumberCashFalse, filteredItemsNumberCashTrue })
    }
    catch (e) {
        res.send({ message: e.message })
    }
})

// router.get('/items/:id', function (req, res, next) {
//     Item.find({ _id: req.params.id })
//         .then((item) => {
//             res.send(item)
//         })

//         .catch(next)
// })


module.exports = router