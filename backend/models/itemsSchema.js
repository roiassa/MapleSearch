const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: String,
    requiredJobs: String,
    requiredLevels: String,
    category: String,
    image: String
});

const Item = mongoose.model('item', ItemSchema);


module.exports = Item