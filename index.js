const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//const MongoClient = require('mongodb').MongoClient;
const todoHandler = require("./routeHandler/todoHandler");

// declier the port
const port = 1000;
// express app initialization
const app = express();
app.use(express.json());
app.use(cors());

// database connection with mongose
// const uri =
//   " mongodb+srv://mongoosePractice:ArifulIslamRaju000@cluster0.yaeov.mongodb.net/mongoosePrac?retryWrites=true&w=majority";
// mongoose
//   .connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("connected succesfully"))
//   .catch((err) => console.log(err));

// application routes
app.use("/todo", todoHandler);

// function err handelar
function errHandelar(err, req, res, next) {
  if (res.headersSet) {
    return next(err);
  }
  res.status(500).json({ error: err });
}
// open
app.get("/", (req, res) => {
  res.send("Now My Server is  Running");
});

app.listen(port);
