const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  data: {
    description: String,
    fatherName: String,
    gender: String,
    motherName: String,
    studentName: String,
    studentPhoneNumber: String,
  },
  loggedinUser: {
    email: { type: String },

    password: { type: String },
    role: { type: String },
    //success: true,
  },
  studentSelactedCourse: {
    // basicElectricity: String,
    // basicElectronics: String,
    // javaScript: String,
    // php: String,
    // python: String,
    subject: [],
    course: String,
  },
});
//console.log(todoSchema);

module.exports = studentSchema;
