const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const teacherCourseDataSchema = require("../schemas/teacherCourseDataSchema");

const teacherCourseData = new mongoose.model("teacherCourseData", teacherCourseDataSchema);

//post all the courses
router.post("/addCourseDataByTeacher", (req, res) => {
    const tempTeacherCourseData = new teacherCourseData(req.body);
    tempTeacherCourseData.save((err) => {
      if (err) {
        res.status(500).json({
          error: err,
          status: false,
        });
      } else {
        res.status(200).json({
          message: "TeacherCourseData was inserted successfully",
        });
      }
    });
  });

  router.get("/allCourses", async (req, res) => {
    await teacherCourseData.find({}, (err, data) => {
      if (err) {
        res.status(500).json({
          error: err,
          status: false,
        });
      } else {
        res.status(200).json({
          result: data,
          message: "TeacherCourseData was get successfully",
        });
      }
    });
  });

  module.exports = router;