const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    courseName: {
        type: String,
    },
    details: {
        type: String,
    },
    courseCode: {
        type: String
    },
    // image: {
    //     type: String
    // },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = courseSchema;