import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { checkUser, authenticateUser, createUser } from "./database.js";

const app = express();

app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const error = req.cookies.error;
  if (req.cookies.error) {
    res.clearCookie("error");
  }
  res.render("index", { error });
});

app.post("/signUp", async (req, res) => {
  const { email, password } = req.body;
  const result = await createUser(email, password);
  if (result) {
    res.cookie("user", email);
    res.redirect("member");
  } else {
    const error = "The email or password is wrong";
    res.cookie("error", error);
    res.redirect("/");
  }
});

app.post("/signIn", async (req, res) => {
  const { email, password } = req.body;
  const result = await authenticateUser(email, password);
  if (result) {
    res.cookie("user", email);
    res.redirect("member");
  } else {
    const error = `
    The email or password is wrong!
    Please try again`;
    res.cookie("error", error);
    res.redirect("/");
  }
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
