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
  datas: {
    description: String,
    fatherName: String,
    gender: String,
    motherName: String,
    studentName: String,
    studentPhoneNumber: String,
  },
  studentSelactedCourse: {
    data: {
      basicElecricity: String,
      basicElectronics: String,
      java: String,
      php: String,
    },
    selactedCourse: {
      course: String,
    },
  },
});
//console.log(todoSchema);

module.exports = studentSchema;
