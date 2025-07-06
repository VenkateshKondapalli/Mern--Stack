const express = require("express");
const {
  getAllDataFromArrayFromFile,
  saveObjectToArrayInFile,
  editObjectFromArrayFromFile,
  deleteObjectFromFile,
} = require("./file-helper");

const filePath = "./ProductDB.json";

const app = express();

app.use(express.json());

// GET all products
app.get("/api/v1/products", async (req, res) => {
  const productArr = await getAllDataFromArrayFromFile(filePath);

  res.json({
    isSuccess: true,
    message: "List of products",
    data: productArr,
  });
});

// POST a new product
app.post("/api/v1/products", async (req, res) => {
  try {
    const data = req.body;
    const newObj = await saveObjectToArrayInFile(data, filePath);

    res.status(201).json({
      isSuccess: true,
      message: "Product added successfully",
      data: newObj,
    });
  } catch (err) {
    res.status(500).json({
      isSuccess: false,
      message: "Internal Server Error",
      data: {},
    });
  }
});

// PATCH an existing product
app.patch("/api/v1/products/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const reqEditContent = req.body;

    await editObjectFromArrayFromFile(reqEditContent, productId, filePath);

    res.json({
      isSuccess: true,
      message: "Product updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      isSuccess: false,
      message: "Internal Server Error",
      data: {},
    });
  }
});

// PUT to replace a product completely
app.put("/api/v1/products/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const getContentToUpdate = req.body;

    await editObjectFromArrayFromFile(getContentToUpdate, productId, filePath);

    res.status(201).json({
      isSuccess: true,
      message: "Product replaced successfully",
    });
  } catch (err) {
    res.status(500).json({
      isSuccess: false,
      message: "Internal Server Error",
    });
  }
});

// DELETE a product
app.delete("/api/v1/products/:productId", async (req, res) => {
  try {
    const { productId } = req.params;

    await deleteObjectFromFile(productId, filePath);

    res.status(200).json({
      isSuccess: true,
      message: `Product with ID ${productId} deleted successfully`,
    });
  } catch (err) {
    res.status(500).json({
      isSuccess: false,
      message: "Internal Server Error",
    });
  }
});

app.listen(2700, () => {
  console.log("Product API server is running on port 2700");
});
