const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    id: String,
    name: String,
    requiredJobs: String,
    requiredLevels: String,
    category: String,
    image: String,
    isCash: Boolean
});

const Item = mongoose.model('item', ItemSchema);


module.exports = Item