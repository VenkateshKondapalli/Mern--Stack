const { Product } = require("../../../models/products_schema");

const createProductControllers = async (req, res) => {
  try {
    const data = req.body;
    console.log("creating products...", data);
    console.log(req.body);

    let newProduct = null;
    try {
      newProduct = await Product.create(data);
      res.status(201);
      res.json({
        isSuccess: true,
        message: "product is created",
        data: {
          product: newProduct,
        },
      });
    } catch (err) {
      console.log("comming error in creating product");
      res.status(400);
      res.json({
        isSuccess: false,
        message: `creation error : ${err.message} `,
        data: {},
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(501);
    res.json({
      isSuccess: false,
      message: "Internal server error",
      data: {},
    });
  }
};

const getAllProducts = async (req, res) => {
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
    console.log(err.message);
    res.status(501);
    res.json({
      isSuccess: false,
      message: "Internal server error",
      data: {},
    });
  }
};

const updateProductControllers = async (req, res) => {
  try {
    const newData = req.body;

    const { productId } = req.params;
    if (!productId) {
      res.status(400);
      return res.json({
        isSuccess: false,
        message: "Invalid productId",
        data: {},
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(productId, newData, {
      new: true,
      runValidators: true,
    });
    if (!updatedProduct) {
      res.status(404);
      return res.json({
        isSuccess: false,
        message: "Product not Found",
        data: {},
      });
    }

    res.json({
      isSuccess: true,
      message: "Products updated",
      data: {
        products: updatedProduct,
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(500);
    res.json({
      isSuccess: false,
      message: "Internal server error",
      data: {},
    });
  }
};

const deleteProductControllers = async (req, res) => {
  try {
    const { productId } = req.params;
    if (!productId) {
      res.status(400);
      return res.json({
        isSuccess: false,
        message: "Invalid productId",
        data: {},
      });
    }

    const newProduct = await Product.findByIdAndDelete(productId);
    if (!newProduct) {
      res.status(404);
      return res.json({
        isSuccess: false,
        message: "Product not Found",
        data: {},
      });
    }

    res.status(204);
    res.json({
      issSuccess: true,
      message: "Succesfully deleted",
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(500);
    res.json({
      issSuccess: true,
      message: "Internal server error",
      data: {
        product: newProduct,
      },
    });
  }
};
module.exports = {
  createProductControllers,
  getAllProducts,
  updateProductControllers,
  deleteProductControllers,
};
