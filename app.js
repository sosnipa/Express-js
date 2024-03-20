const express = require("express");
const PORT = 3030;
const app = express();
const authorRoute = require("./author.route");
const logger = require("./logger");

// Middleware
app.use(express.json());
app.use(logger);
app.use("/author", authorRoute);

app.get("/", (req, res) => {
  res.send(`Hello Readers , welcome to this hub `);
});

app.all("*", (req, res) => {
  res.send(`Page doesn't exit, Kindly go to the correct route`);
});
app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});

module.exports = app;
