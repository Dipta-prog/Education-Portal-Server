const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const newAdminDataSchema = require("../schemas/newAdminDataSchema");

const NewAdminData = new mongoose.model("NewAdminData", newAdminDataSchema);

// Get all the admin
router.get("/allAdmin", async (req, res) => {
  await NewAdminData.find({}, (err, data) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        result: data,
        message: "NewAdminData was get successfully",
      });
    }
  });
});

// post a NewAdminData
router.post("/addAdmin", (req, res) => {
    const tempNewAdminData = new NewAdminData(req.body);
    tempNewAdminData.save((err) => {
      if (err) {
        res.status(500).json({
          error: err,
          status: false,
        });
      } else {
        res.status(200).json({
          message: "NewAdminData was inserted successfully",
        });
      }
    });
  });


  // delete a Admin

  router.delete("/delete/:id", async (req, res) => {
    await NewAdminData.deleteOne({ _id: req.params.id }, (err) => {
      if (err) {
        res.status(500).json({
          error: err,
          status: false,
        });
      } else {
        res.status(200).json({
          message: "Admin was deleted successfully",
        });
      }
    });
  });


  module.exports = router;