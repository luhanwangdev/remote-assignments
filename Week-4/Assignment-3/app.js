import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { getUsers, getUser, createUser } from "./database.js";

const app = express();

app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/signUp", async (req, res) => {
  const { email, password } = req.body;
  const result = await createUser(email, password);
  console.log(result);
  res.redirect("member");
});

app.post("/signIn", async (req, res) => {
  const { email, password } = req.body;

  res.redirect("member", { email });
});

app.get("/member", (req, res) => {
  res.render("member");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something Broke!");
});

app.listen(3000, () => {
  console.log("The server is now listening on port 3000");
});
