const Joi = require("joi");
const jwt = require("jsonwebtoken");
const db = require("../models");
require("dotenv").config();

const UserModel = db.user;

const validateUserCreation = async (req, res, next) => {
  try {
    const schema = Joi.object({
      id: Joi.string().required(),
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      password: Joi.string().required(),
      email: Joi.string().email().required(),
      user_type: Joi.string().valid("admin", "customer"),
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
    const schema = Joi.object({
      password: Joi.string().required(),
      email: Joi.string().email().required(),
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

const bearerTokenAuth = async (req, res, next) => {
  const authHeader = req.headers;

  if (!authHeader.authorization) {
    res.status(401).json({
      message: "You are not authorized!",
    });
  }

  const token = authHeader.authorization.split(" ")[1]; // removing default string in the token.

  const decoded = await jwt.verify(token, process.env.JWT_SECRET); // verifying the user browser provided token.

  const user = await UserModel.findOne({ id: decoded.id }); // checking the user id against records in db

  if (!user) {
    res.status(401).json({
      message: "You are not authorized!", // handling error in not found cases
    });
  }

  req.user = user; // returning user and granting access
  next();
};

module.exports = { validateUserCreation, LoginValidation, bearerTokenAuth };
