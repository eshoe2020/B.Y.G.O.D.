const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    content: String
})

module.exports = mongoose.model('Item', itemSchema);