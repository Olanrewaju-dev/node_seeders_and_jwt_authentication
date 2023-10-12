const express = require("express");

const productController = require("../controllers/product.controller");
const middleware = require("../middlewares/validation");

const productRouter = express.Router();

// GET - fetch all products
productRouter.get("/", middleware.bearerTokenAuth, productController);

module.exports = productRouter;
