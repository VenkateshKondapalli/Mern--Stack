const dotENV = require("dotenv");
dotENV.config();

const express = require("express");

const { apiRouter } = require("./api/v1/routes.js");

const app = express();
app.use(express.json());

require("./config/db.js");

app.use((req, res, next) => {
  console.log("--------------");
  console.log(new Date(), req.method, req.url);
  console.log("--------------");
  next();
});

app.use("/api/v1", apiRouter);

app.listen(2900, () => {
  console.log("server is running");
});
