const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
  },
  catagory: {
    type: String,
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
//console.log(todoSchema);

module.exports = todoSchema;
