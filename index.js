const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//const MongoClient = require('mongodb').MongoClient;...
const studentHandler = require("./routeHandler/studentHandler");
const studentCommentHandler = require("./routeHandler/studentCommentHandler");

const departmentHandler = require("./routeHandler/departmentHandler");
const adminCourseDataHandler = require("./routeHandler/adminCourseDataHandler");
// declier the port
const port = 1000;
// express app initialization
const app = express();
app.use(express.json());
app.use(cors());

require("dotenv").config();
console.log(process.env.DB_PASS);
////database connection with mongose
//  `mongodb+srv://DevZone:DevZone302.2@cluster0.cbiot.mongodb.net/Education_Portal?retryWrites=true&w=majority`;
const uri = `mongodb+srv://DevZone:${process.env.DB_PASS}@cluster0.cbiot.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
// const uri =
//   " mongodb+srv://DevZone:DevZone302.2@cluster0.yaeov.mongodb.net/Education_Portal?retryWrites=true&w=majority";
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yaeov.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected succesfully"))
  .catch((err) => console.log(err));

// application routes
app.use("/students", studentHandler);
app.use("/studentComment", studentCommentHandler);

app.use("/department", departmentHandler);
app.use("/course", adminCourseDataHandler);
//// function err handelar
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
