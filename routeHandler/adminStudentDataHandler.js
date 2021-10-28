const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const loginChecker = require("../middlewares/loginChecker");
const adminStudentDataSchema = require("../schemas/adminStudentDataSchema");

const AdminStudentData = new mongoose.model("AdminStudentData", adminStudentDataSchema);

// Get all the allStudent

router.get("/allStudent", loginChecker, async (req, res) => {
  console.log(req.userName)
  await AdminStudentData.find({}, (err, data) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        result: data,
        message: "AdminStudentData was inserted successfully",
      });
    }
  });
});

// post a AdminStudentData

router.post("/addStudent", (req, res) => {
    const newAdminStudentData = new AdminStudentData(req.body);
    newAdminStudentData.save((err) => {
      if (err) {
        res.status(500).json({
          error: err,
          status: false,
        });
      } else {
        res.status(200).json({
          message: "AdminStudentData was inserted successfully",
        });
      }
    });
  });

  module.exports = router;