const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    avatarURL: String,
}, {
    timestamps: true
});