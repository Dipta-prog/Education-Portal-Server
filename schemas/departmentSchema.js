const mongoose = require("mongoose");

const departmentSchema = mongoose.Schema({
    departmentName: {
        type: String,
    },
    details: {
        type: String,
    },
    departmentCode: {
        type: String
    },
    image: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = departmentSchema;