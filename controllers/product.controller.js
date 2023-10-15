const ProductModel = require("../models/product.model");

const getProducts = async (req, res) => {
  const allProducts = await ProductModel.find();

  if (!allProducts) {
    res.status(404).json({
      message: "No product items found.", // handling error where items is not found.
      data: [],
    });
  }

  res.status(200).send({
    message: "All products fetched successfully", // returning all products to client and success message.
    data: allProducts,
  });
};

module.exports = getProducts;
