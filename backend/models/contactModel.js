const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true,
        match: [/^[a-zA-Z][a-zA-Z\s]*$/, 'Please enter a valid name'],
        required: [true, "Please enter your name"]
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
        required: [true, "Please enter your email"]
    },
    number: {
        type: String,
        lowercase: true,
        trim: true,
        match: [/^[0-9]+$/, 'Please enter a valid number'],
        required: [true, "Please enter your phone number"]
    },
    message: {
        type: String,
        lowercase: true,
        trim: true,
        required: [true, "Please enter your message"]
    },
}, {
    timestamps: true
});


module.exports = mongoose.model('Contact', messageSchema);