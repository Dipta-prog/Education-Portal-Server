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
        message: "AdminTeachersData was get successfully",
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


  // delete a Teacher

  router.delete("/deleted/:id", async (req, res) => {
    console.log(req.params)
    await AdminTeachersData.deleteOne({ _id: req.params.id }, (err) => {
      if (err) {
        res.status(500).json({
          error: err,
          status: false,
        });
      } else {
        res.status(200).json({
          delete: "yes",
          message: "Teacher was deleted successfully",
        });
      }
    });
  });


  module.exports = router;