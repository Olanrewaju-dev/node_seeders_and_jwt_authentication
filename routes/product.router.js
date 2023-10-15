const express = require("express");
const controller = require("../controllers/product.controller");
const middleware = require("../middlewares/validation");

const productRouter = express.Router();

// Fetching all product items route
productRouter.get("/", middleware.bearerTokenAuth, controller);

module.exports = productRouter;
