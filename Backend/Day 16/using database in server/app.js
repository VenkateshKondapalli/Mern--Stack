const express = require("express");

const app = express();
app.use(express.json()); // it is mandatry this will convet that body will read by express

const { Product } = require("./models/productsSchema.js");
require("./config/db.js");

const dotEnv = require("dotenv");
dotEnv.config();

app.get("/", (req, res) => {
  res.status(200);
  res.json({
    isSuccess: true,
    message: "server is running",
    data: {},
  });
});

app.post("/api/v1/products", async (req, res) => {
  try {
    const data = req.body;
    const newProducts = await Product.create(data);
    res.status(201);
    res.json({
      isSuccess: true,
      message: "Product Created",
      data: {
        product: newProducts,
      },
    });
  } catch (err) {
    console.log("error occured in post Products: ", err.message);
    if (err.name === "validationError" || err.code == "11000") {
      res.status(400);
      res.json({
        isSuccess: false,
        message: err.message,
        data: {},
      });
    } else {
      res.status(500);
      res.json({
        isSuccess: false,
        message: "Internal server Error",
        data: {
          errMessage: err.message,
        },
      });
    }
  }
});

app.get("/api/v1/products", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200);
    res.json({
      isSuccess: true,
      message: "Products Fetched",
      data: {
        products: allProducts,
      },
    });
  } catch (err) {
    console.log("error occured in post Products: ", err.message);
    res.status(400);
    res.json({
      isSuccess: false,
      message: "Internal server Error",
      data: {
        errMessage: err.message,
      },
    });
  }
});

app.delete("/api/v1/products/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const deleteItem = await Product.findByIdAndDelete(productId);
    if (deleteItem == undefined) {
      res.status(400);
      res.json({
        isSuccess: false,
        message: "Invalid Product Id",
        data: {},
      });
      res.status(204);
      res.json({
        isSuccess: true,
        message: "product: Deleted",
        data: {
          product: deleteItem,
        },
      });
    }
  } catch (err) {
    console.log("error occured in post Products: ", err.message);
    res.status(400);
    res.json({
      isSuccess: false,
      message: "Internal server Error",
      data: {
        errMessage: err.message,
      },
    });
  }
});
app.listen(2900, () => {
  console.log("server is started");
});
