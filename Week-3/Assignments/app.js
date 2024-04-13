const express = require("express");
const app = express();

const mainRoutes = require("./routers");
app.use(mainRoutes);

app.listen(3000, () => {
  console.log("The server is on the port 3000");
});
