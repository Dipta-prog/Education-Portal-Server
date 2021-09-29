const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const studentSchema = require("../schemas/studentSchema");

const Student = new mongoose.model("Student", studentSchema);
// Get all tha todos

router.get("/", async (req, res) => {
  await Student.find({}, (err, data) => {
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

// Get a todo by Id

router.get("/:id", async (req, res) => {});
// post a todo

router.post("/", (req, res) => {
  const newStudent = new Student(req.body);
  newStudent.save((err) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        message: "Todo was inserted succesfully",
      });
    }
  });
});
// post multiple todo

router.post("/all", async (req, res) => {
  await Student.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        message: "Todo was inserted succesfully",
      });
    }
  });
});

// put todo update

router.put("/:id", async (req, res) => {
  const rasult = await Student.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        title: "yooo",
        description: "i love niha aa a",
      },
    },
    {
      new: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: err,
          status: false,
        });
      } else {
        res.status(200).json({
          message: "Todo was inserted succesfully",
        });
      }
    }
  );
  console.log(rasult);
});

// delete todo

router.delete("/:id", async (req, res) => {
  await Student.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        message: "Todo was inserted succesfully",
      });
    }
  });
});

module.exports = router;
