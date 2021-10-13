const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const adminTeachersDataSchema = require("../schemas/adminTeachersDataSchema");

const AdminTeachersData = new mongoose.model("AdminTeachersData", adminTeachersDataSchema);

// Get all the Teachers

router.get("/allTeacher", async (req, res) => {
  await AdminTeachersData.find({}, (err, data) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        result: data,
        message: "AdminTeachersData was inserted successfully",
      });
    }
  });
});

// post a AdminTeachersData

router.post("/addTeacher", (req, res) => {
    const newAdminTeachersData = new AdminTeachersData(req.body);
    newAdminTeachersData.save((err) => {
      if (err) {
        res.status(500).json({
          error: err,
          status: false,
        });
      } else {
        res.status(200).json({
          message: "AdminTeachersData was inserted successfully",
        });
      }
    });
  });

  module.exports = router;