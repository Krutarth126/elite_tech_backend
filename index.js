const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(Cors());
app.use((req, res, next) => {
  res.setHeader("Acess-control-allow-origin", "*"),
    res.setHeader("Acess-control-allow-Header", "*");
  next();
});

app.get("/", async (req, res) => {
  res.status(200).send("hello, welcome to elite tech");
});

app.listen(port, () => {
  console.log(`listening at localhost ${port}`);
});
