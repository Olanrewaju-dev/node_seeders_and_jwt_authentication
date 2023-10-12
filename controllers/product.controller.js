const db = require("../models");

const ProductModel = db.product;

// GET - View all products in db
const getProducts = async (req, res) => {
  console.log("I got here");
  const allProducts = await ProductModel.findAll();

  if (!allProducts) {
    res.status(404).json({
      message: "No product items found.",
      data: [],
    });
  }

  res.status(200).json({
    allProducts,
  });
};

module.exports = getProducts;
