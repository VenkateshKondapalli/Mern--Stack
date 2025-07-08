const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    description: String,
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    price: {
      type: Number,
      min: 0,
      require: true,
    },
    quantity: {
      type: Number,
      min: 0,
      default: 1,
    },
    images: [String],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = model("product", productSchema);
module.exports = { Product };
