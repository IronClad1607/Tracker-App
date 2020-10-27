const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUri =
  "mongodb+srv://abc:abc@cluster0.iml6k.mongodb.net/<dbname>?retryWrites=true&w=majorit";

mongoose.connect(mongoUri, {
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
