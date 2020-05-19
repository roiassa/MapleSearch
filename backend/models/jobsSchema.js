const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    path: String,
    title: String,
    image: String,
    overview: String,
    isCash: Boolean
});

const Job = mongoose.model('job', JobSchema);


module.exports = Job