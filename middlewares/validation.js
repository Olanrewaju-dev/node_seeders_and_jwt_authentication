const Joi = require("joi");
const jwt = require("jsonwebtoken");
const ProductModel = require("../models/product.model");
require("dotenv").config();

const validateUserCreation = async (req, res, next) => {
  try {
    // validating user input to create a new user
    const schema = Joi.object({
      id: Joi.string().required(),
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      password: Joi.string().required(),
      email: Joi.string().email().required(),
      user_type: Joi.string().valid("admin", "customer"),
      gender: Joi.string().valid("male", "female"),
    });

    await schema.validateAsync(req.body, {
      abortEarly: true,
      allowUnknown: true,
    });

    next();
  } catch (error) {
    console.log(error.message);
  }
};

const LoginValidation = async (req, res, next) => {
  try {
    // validating login details
    const schema = Joi.object({
      password: Joi.string().required(),
      email: Joi.string().email().required(),
    });

    await schema.validateAsync(req.body, {
      // validating user login via Joi module
      abortEarly: true,
      allowUnknown: true,
    });

    next();
  } catch (error) {
    console.log(error.message);
  }
};

const bearerTokenAuth = async (req, res, next) => {
  const authHeader = req.headers;

  if (!authHeader.authorization) {
    res.status(401).json({
      message: "You are not authorized!",
    });
  }

  const token = authHeader.authorization.split(" ")[1]; // removing default string in the token.

  const decoded = await jwt.verify(token, process.env.JWT_SECRET); // verifying the user browser provided token.

  const user = await ProductModel.find(); // checking the product item in db

  if (!user) {
    res.status(501).json({
      message: "Internal server error!", // handling error in not found cases
    });
  }

  req.user = user; // recognizing user and granting access
  next();
};

module.exports = { validateUserCreation, LoginValidation, bearerTokenAuth };
