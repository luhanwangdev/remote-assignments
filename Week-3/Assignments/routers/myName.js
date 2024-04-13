const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");

router.use(cookieParser());

router.get("/", (req, res) => {
  const name = req.cookies.username;
  res.render("welcome", { name });
});
module.exports = router;
