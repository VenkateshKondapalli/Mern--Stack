const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    title: {
      //for adding valiadtions we can add like that
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    description: String,
    rating: {
      type: Number,
      min: 0,
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = model("product", productSchema); // name of the collection keep it singular but mongodb  will make itself make it plural

module.exports = { Product };
