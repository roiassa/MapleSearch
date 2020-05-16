const mongoose = require('mongoose')
const { mongoUri } = require('../config/config')


module.exports = function connect() {
   return mongoose.connect(mongoUri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .catch(() => {
        console.log('could not connect to MongoDB')
        process.exit(1)
    })
}
