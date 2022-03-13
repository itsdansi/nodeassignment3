const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 5001;
const host = process.env.HOSTNAME || "localhost";

app.get("/", (req, res) => {
  res.send("Hello from the home page!");
});
app.get("/contact", (req, res) => {
  res.send("contact page");
});
app.get("/about", (req, res) => {
  res.send("about page");
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
