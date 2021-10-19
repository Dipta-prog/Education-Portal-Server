const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const studentCommentSchema = require("../schemas/studentCommentSchema");
const ObjectID = require("mongodb").ObjectID;
const StudentComment = new mongoose.model(
  "StudentComment",
  studentCommentSchema
);
// Get all tha todos

router.get("/", async (req, res) => {
  await StudentComment.find({}, (err, data) => {
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
  const newStudentComment = new StudentComment(req.body);
  newStudentComment.save((err) => {
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
  await StudentComment.insertMany(req.body, (err) => {
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

router.put("/postes/:id", async (req, res) => {
  const rasult = await StudentComment.updateOne(
    { _id: req.params.id },
    {
      $push: {
        commentss: req.body.comments,
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
  console.log(req.body.comments);
  console.log(rasult);
});

// delete todo

router.delete("/:id", async (req, res) => {
  await StudentComment.deleteOne({ _id: req.params.id }, (err) => {
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

//////////

// router.get("/postes/:id", async (req, res) => {
//   await StudentComment.find({ _id: ObjectID(req.params.id) }).toArray(
//     (err, document) => {
//       res.send(document[0]);
//       console.log(document);
//     }
//   );
//   console.log(req.params.id);
// });

//////////////

module.exports = router;
