const mongoose = require("mongoose");

const glassScheme = mongoose.Schema({
  color: String,
  size: String,
  price: Number,
  brand: { type: String, required: true },
});

const GlassModel = mongoose.model("glass", glassScheme);

module.exports = GlassModel;
