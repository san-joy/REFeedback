const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const employeeRoutes = require("./routes/employees");
const feedbackRoutes = require("./routes/feedback");


const app = express();

mongoose.connect('mongodb://localhost:27017/REFeedback', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });


app.use(bodyParser.json());

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/employees", employeeRoutes);
app.use("/api/feedback", feedbackRoutes);

module.exports = app;
