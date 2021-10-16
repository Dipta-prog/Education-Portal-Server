const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const adminCourseDataSchema = require("../schemas/adminCourseDataSchema");

const Course = new mongoose.model("Course", adminCourseDataSchema);

// Get all the Course
router.get("/", async (req, res) => {
  await Course.find({}, (err, data) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        rasult: data,
        message: "Todo was inserted succesfully",
      });
    }
  });
});
////
router.get("/allCourse", async (req, res) => {
  await Course.find({}, (err, data) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        result: data,
        message: "Course was get successfully",
      });
    }
  });
});

// post a Course

router.post("/addCourse", (req, res) => {
  const newCourse = new Course(req.body);
  newCourse.save((err) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        message: "Course was inserted successfully",
      });
    }
  });
});

module.exports = router;
