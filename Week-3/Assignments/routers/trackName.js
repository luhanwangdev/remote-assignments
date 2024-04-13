const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { name } = req.query;
  res.cookie("username", name);
  res.redirect("/myName");
});

router.get("/clear", (req, res) => {
  res.clearCookie("username");
  res.redirect("/myName");
});
module.exports = router;
