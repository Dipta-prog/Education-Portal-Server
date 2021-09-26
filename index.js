const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//const MongoClient = require('mongodb').MongoClient;
const todoHandler = require("./routeHandler/todoHandler");
require('dotenv').config()


// declier the port
const port = 1000;
// express app initialization
const app = express();
app.use(express.json());
app.use(cors());

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

// function err handler
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
