const mongoose = require('mongoose')

const loginSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
    
})

module.exports = mongoose.model('login', loginSchema)