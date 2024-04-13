const express = require("express");
const app = express();

//setting router
const mainRoutes = require("./routers");
const dataRoutes = require("./routers/data");
app.use(mainRoutes);
app.use("/data", dataRoutes);

app.listen(3000, () => {
  console.log("The server is on the port 3000");
});
