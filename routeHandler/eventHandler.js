const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const eventSchema = require("../schemas/eventSchema");

const Event = new mongoose.model("Event", eventSchema);

// Get all tha allDepartment

router.get("/allEvent", async (req, res) => {
  await Event.find({}, (err, data) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        result: data,
        message: "Event was inserted successfully",
      });
    }
  });
});

// post a Event

router.post("/addEvent", (req, res) => {
    const newEvent = new Event(req.body);
    newEvent.save((err) => {
      if (err) {
        res.status(500).json({
          error: err,
          status: false,
        });
      } else {
        res.status(200).json({
          message: "Event was inserted successfully",
        });
      }
    });
  });

  module.exports = router;