const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: { type: String, required: true, min: 6, max: 15 },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 15,
        index: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 15
    },
    date: { type: Date, default: Date.now },
})


module.exports = mongoose.model('User', UserSchema);