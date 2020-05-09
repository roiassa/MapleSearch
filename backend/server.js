const express = require('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/maplesearch', {useUnifiedTopology: true,  useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true });

app.use(bodyParser.json());

// app.use('/api', require('./routes/api'));

app.use(function(err, req, res, next){
    res.status(422).send({error: err.message})
})

app.listen(4000, function () {
    console.log('Now listening for requests');
});