const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    nic: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);