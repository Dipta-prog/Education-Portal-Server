const mongoose = require("mongoose");

const studentCommentSchema = mongoose.Schema({
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  date: {
    type: Date,
    default: Date.now,
  },

  //   data: {
  subject: { type: String },
  title: { type: String },
  commentss: [],
  //   },
});
// console.log(studentCommentSchema);

module.exports = studentCommentSchema;
