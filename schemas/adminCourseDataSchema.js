const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    courseName: {
        type: String,
    },
    courseDetails: {
        type: String,
    },
    courseCode: {
        type: Number
    },
    departmentName: {
        type: String
    },
    image: {
        type: String
    },
    courseFinishedDate: {
        type: Date
    },
    courseFinishedLength: {
        type: Number
    },
    courseCredit: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = courseSchema;
