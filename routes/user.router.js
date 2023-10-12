const express = require("express");
const userRouter = express.Router();
const controller = require("../controllers/user.controller.");
const middleware = require("../middlewares/validation");

//creating a user
userRouter.post(
  "/signup",
  middleware.validateUserCreation,
  controller.createUser
);

// login a user
userRouter.post("/login", middleware.LoginValidation, controller.loginUser);

module.exports = userRouter;
