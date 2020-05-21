const express = require('express');
const router = express.Router();
const Item = require('../models/itemsSchema');


router.get('/items', function (req, res, next) {
    Item.find({})
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