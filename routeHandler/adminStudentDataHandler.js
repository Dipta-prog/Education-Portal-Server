const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const loginChecker = require("../middlewares/loginChecker");
const adminStudentDataSchema = require("../schemas/adminStudentDataSchema");

const AdminStudentData = new mongoose.model("AdminStudentData", adminStudentDataSchema);

// Get all the allStudent

router.get("/allStudent", async (req, res) => {
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

router.get("/editStudent/:id", async (req, res) => {

  await AdminStudentData.find({ _id: ObjectId(req.params.id) }, (err, data) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        result: data,
        message: "single student",
      });
    }
  });
});

// get login student data


// router.get("/allStudent/:email", async (req, res) => {
//   console.log(req.params)
//   await AdminStudentData.find({email: req.params}, (err, data) => {
//     if (err) {
//       res.status(500).json({
//         error: err,
//         status: false,
//       });
//     } else {
//       res.status(200).json({
//         result: data,
//         message: "login student data get successfully",
//       });
//     }
//   });
// });




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


// delete a student

router.delete("/delete/:id", async (req, res) => {
  await AdminStudentData.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        message: "Student was deleted successfully",
      });
    }
  });
});


//update api

router.patch('/update/:id', (req, res) => {
  console.log(req)
  AdminStudentData.updateOne({ _id: ObjectId(req.params.id) },
    {
      $set: {

      }
    })
    .then(result => {
      res.json(result)
      console.log(result);
    })
})


module.exports = router;