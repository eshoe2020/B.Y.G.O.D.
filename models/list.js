const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    item: [{type: Schema.Types.ObjectId, ref: 'Item'}]
})

module.exports = mongoose.model('List', listSchema);