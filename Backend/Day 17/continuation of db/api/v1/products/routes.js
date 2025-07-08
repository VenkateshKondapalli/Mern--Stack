const express = require("express");
const {
  createProductControllers,
  getAllProducts,
  updateProductControllers,
  deleteProductControllers,
} = require("./controller.js");
const productRouter = express.Router();

productRouter.get("/", getAllProducts);

productRouter.post("/", createProductControllers);

productRouter.patch("/:productId", updateProductControllers);

productRouter.delete("/:productId", deleteProductControllers);

module.exports = { productRouter };
