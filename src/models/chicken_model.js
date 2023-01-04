const mongoose = require('mongoose')
const chicken_model = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
    },
    weight: {
        type: Number,
        required: true
    },
    steps: {
        type: Number,
        default: 0
    },
    isRunning: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('chicken', chicken_model)