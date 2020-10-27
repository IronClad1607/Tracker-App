const { mongoURI } = require("../config");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo db");
});

mongoose.connection.on("error", (err) => {
  console.error("Error".err);
});

app.get("/", (req, res) => {
  res.send("Hi There!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
