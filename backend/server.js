const express = require('express');
require('dotenv').config({path: './config/.env'})
const bodyParser = require('body-parser');
const connect = require('./db/mongodb')

const port = process.env.PORT || 3000

const app = express();

connect()
    .then(() => {
        console.log('connected to db')
        app.listen(port, function () {
            console.log(`Now listening for requests on port: ${port}`);
        });
    })

//making the uploades folder publicly available
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.json());
app.use('/api', require('./routes/jobs'));
app.use('/api', require('./routes/items'));

app.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message })
})

