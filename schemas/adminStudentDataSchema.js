const mongoose = require("mongoose");

const adminStudentDataSchema = mongoose.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
    },
    mobile: {
        type: Number
    },

    department: {
        type: String,
    },
    userName: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zip: {
        type: Number,
    },
    country: {
        type: String,
    },

    submitDate: {
        type: Date,
        default: Date.now
    },
});

module.exports = adminStudentDataSchema;