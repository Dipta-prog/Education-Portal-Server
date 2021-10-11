const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const router = express.Router();
const userSchema = require("../../schemas/userSchema/userSchema");

const User = new mongoose.model("User", userSchema);

// signup

router.post("/signup", async(req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const newUser = new User({
        name: req.body.name,
        userName: req.body.userName,
        role: req.body.role,
        password: hashedPassword
    });
    await newUser.save();
    res.status(200).json({
      message: "signup success",
    });
  } catch  {
    res.status(500).json({
      message: "Signup failed",
    });
  }
  });

  module.exports = router;