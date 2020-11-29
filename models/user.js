const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarURL: String,
    googleId: String,
    item: [{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);