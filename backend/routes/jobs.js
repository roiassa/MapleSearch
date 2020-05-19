const express = require('express');
const router = express.Router();
const {getJobs, addAJob} = require('../services/jobs-services')
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
    getJobs()
    .then(function(jobs){
        res.send(jobs)
    })
    .catch(next)
})


router.post('/jobs', upload.single('jobImage'), function(req, res, next) {
    addAJob(
        req.body.path,
        req.body.title,
        req.file.path,
        req.body.overview)
        .then(function(job){
            res.send(job)
    })
    .catch(next)
})


module.exports = router;