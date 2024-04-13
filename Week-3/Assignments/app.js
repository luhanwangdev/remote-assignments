const express = require("express");
const app = express();

//setting router
const mainRoutes = require("./routers");
const dataRoutes = require("./routers/data");
const myNameRoutes = require("./routers/myName");
const trackNameRoutes = require("./routers/trackName");

app.use(express.static("public"));
app.set("view engine", "pug");

app.use(mainRoutes);
app.use("/data", dataRoutes);
app.use("/myName", myNameRoutes);
app.use("/trackName", trackNameRoutes);

app.listen(3000, () => {
  console.log("The server is on the port 3000");
});
