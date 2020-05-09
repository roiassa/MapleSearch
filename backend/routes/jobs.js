const express = require('express');
const router = express.Router();
const Job = require('../models/jobsSchema')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //null if there's an error and path where we store the file:
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        //the date that we uploaded the file(replacing the ":" with "-" because of windows problem) with the originalname of the file:
        cb(null, new Date().toISOString().replace(/:/g, '-')+ file.originalname);
    }
})


//rejecting a file if it's not the type of file we want:
const fileFilter = (req, file,cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true)
    } else {
        cb(new Error('Type file is not supported!'), false)
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});


router.get('/jobs', function(req, res, next){
    Job.find({}).then(function(jobs){
        res.send(jobs)
    })
    .catch(next)
})


router.post('/jobs', upload.single('jobImage'), function(req, res, next) {
    console.log(req.file.path)
    Job.create({
        path: req.body.path,
        title: req.body.title,
        image: req.file.path,
        overview: req.body.overview
    }).then(function(job){
        res.send(job)
    })
    .catch(next)
})


module.exports = router;