// initialize express
const express = require("express");
const app = express();

// serve static files from public dir
app.use(express.static("public"));

// import routes
const htmlRoutes = require("./controllers/htmlRoutes");
app.use(htmlRoutes);

// declare port and listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log("Server listening on PORT: " + PORT);
});