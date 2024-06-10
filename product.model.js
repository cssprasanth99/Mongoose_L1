const mongoose = require("mongoose");

const productScheme = mongoose.Schema({
  title: String,
  price: { type: Number, required: true },
  brand: String,
  quantity: Number,
});

const ProductModel = mongoose.model("product", productScheme);

module.exports = ProductModel;
