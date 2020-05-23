const mongoose = require('mongoose')

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/maplesearch'

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
