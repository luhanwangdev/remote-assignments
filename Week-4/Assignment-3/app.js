import express from "express";
const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("The server is now listening on port 3000");
});
