const Job = require('../models/jobsSchema')


function getJobs() {
   return Job.find({})
}

function addAJob(jobPath, jobTitle, jobImage, jobOverview) {
    return Job.create({
        path: jobPath,
        title: jobTitle,
        image: jobImage,
        overview: jobOverview
    })
}

module.exports = {
    getJobs,
    addAJob
}