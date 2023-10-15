const mongoose = require("mongoose");
const shortId = require("short-uuid");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  _id: {
    type: String,
    default: shortId.generate(),
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    ENUM: ["small", "medium", "large"],
  },
  description: {
    type: String,
    required: true,
  },
});

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;
