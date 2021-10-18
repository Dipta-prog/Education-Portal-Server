const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const departmentSchema = require("../schemas/departmentSchema");

const Department = new mongoose.model("Department", departmentSchema);

// Get all tha allDepartment
router.get("/", async (req, res) => {
  await Department.find({}, (err, data) => {
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
router.get("/allDepartment", async (req, res) => {
  await Department.find({}, (err, data) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        result: data,
        message: "Department was inserted successfully",
      });
    }
  });
});

// post a department

router.post("/addDepartment", (req, res) => {
  const newDepartment = new Department(req.body);
  newDepartment.save((err) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        message: "Department was inserted successfully",
      });
    }
  });
});

module.exports = router;
