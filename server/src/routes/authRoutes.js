const express = require("express");
const { model } = require("mongoose");

const router = express.Router();

router.post("/signup", (req, res) => {
  console.log(req.body);
  res.send("You made a post request");
});

module.exports = router;