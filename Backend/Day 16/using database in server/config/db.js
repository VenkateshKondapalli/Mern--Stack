const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_DB_URL, {
    dbName: "day16",
  })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("there is somting error in connceting: ", err.message);
  });
