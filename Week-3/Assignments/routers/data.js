const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Here is stand for the data ");
});

module.exports = router;
