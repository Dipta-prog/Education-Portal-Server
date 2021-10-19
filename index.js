const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//const MongoClient = require('mongodb').MongoClient;
const todoHandler = require("./routeHandler/todoHandler");
const eventHandler = require("./routeHandler/eventHandler")
const adminStudentDataHandler = require("./routeHandler/adminStudentDataHandler")
const adminTeachersDataHandler = require("./routeHandler/adminTeachersDataHandler")
const newAdminDataHandler = require("./routeHandler/newAdminDataHandler")
const teacherCourseDataHandler = require('./routeHandler/teacherCourseDataHandler')
const adminCourseDataHandler = require("./routeHandler/adminCourseDataHandler");
const userHandler = require("./routeHandler/userHandler/userHandler");
const studentHandler = require("./routeHandler/studentHandler");
const studentCommentHandler = require("./routeHandler/studentCommentHandler");
const departmentHandler = require("./routeHandler/departmentHandler");

// dotenv config
require('dotenv').config()
const port = 1000;

// express app initialization
const app = express();
app.use(express.json());
app.use(cors());


console.log(process.env.DB_NAME);

// database connection with mongoose
const uri =
  `mongodb+srv://DevZone:${process.env.DB_PASS}@cluster0.cbiot.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected successfully"))
  .catch((err) => console.log(err));

// application routes
app.use("/todo", todoHandler);

app.use("/department", departmentHandler);

app.use("/event", eventHandler);

app.use("/admin", adminStudentDataHandler);

app.use("/admin", adminTeachersDataHandler);

app.use("/admin", newAdminDataHandler);

app.use('/courseInformation', teacherCourseDataHandler);
app.use("/course", adminCourseDataHandler);

app.use("/user", userHandler);

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
  res.send("Server Running Successfully");
});

app.listen(process.env.PORT || port);
