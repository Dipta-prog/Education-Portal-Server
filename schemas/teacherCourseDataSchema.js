const mongoose = require("mongoose");

const teacherCourseDataSchema = mongoose.Schema({
    courseCode: {
        type: Number,
    },
    program: {
        type: String
    },
    faculty: {
        type: String,
    },
    courseCategory: {
        type: String,
    },
    courseOutLine: {
        type: String,
    },
    // textBook: {
    //     type: file
    // },
    teacherName: {
        type: String,
    },
    officeRoom: {
        type: Number,
    },
    cellNumber: {
        type: Number,
    },
    email: {
        type: String,
    },
    guideline: {
        type: String,
    },
    announcement: {
        type: String,
    }
})

module.exports = teacherCourseDataSchema;