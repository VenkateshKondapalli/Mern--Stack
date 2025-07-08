const dotENV = require("dotenv");
dotENV.config();

const express = require("express");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log("--------------");
  console.log(new Date(), req.method, req.url);
  console.log("--------------");
  next();
});

app.get("/", (req, res) => {
  res.json({
    isSuccess: true,
    message: "server is running",
    data: {},
  });
});

app.use((req, res, next) => {
  console.log("!!!!!!!!!!!");
  next();
});
app.listen(2900, () => {
  console.log("server is running");
});
