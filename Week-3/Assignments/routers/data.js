const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { number } = req.query;
  if (!number) {
    res.send("Lack of Parameter");
  } else if (number % 1 !== 0 || number / 1 <= 0) {
    //stand for non-integer and negative integer and 0
    res.send("Wrong parameter");
  } else {
    //recursion
    const sum = (n) => {
      if (n === 0) {
        return 0;
      } else {
        return n + sum(n - 1);
      }
    };
    //change the number from string to integer
    const int = number / 1;
    res.send(`${sum(int)}`);
  }
});

module.exports = router;
